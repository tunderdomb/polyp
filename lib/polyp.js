var path = require("path")
var fs = require("fs")
var glob = require("glob")
var uglify = require("uglify-js")

var async = require("async")
var chalk = require("chalk")

var polyp = module.exports = {}

var BROWSER_POLYP = path.join(__dirname, "browser.js")

polyp.log = function (){
  console.log.apply(console, ["polyp "].concat([].slice.call(arguments)))
}

polyp.warn = function (){
  console.log.apply(console, ["polyp", chalk.bgYellow.black("WARN")].concat([].slice.call(arguments)))
}

polyp.error = function (){
  console.log.apply(console, ["polyp", chalk.bgRed.black("ERROR")].concat([].slice.call(arguments)))
}

polyp.ok = function (){
  console.log.apply(console, ["polyp", chalk.green("OK")].concat([].slice.call(arguments)))
}

polyp.getFeatures = function ( done ){
  polyp.getData(function ( support ){
    done(support.data)
  })
}

polyp.getPolyfills = function ( done ){
  glob(path.join(__dirname, "../polyfills/*.js"), {cwd: __dirname}, function ( err, files ){
    done(files)
  })
}

var detectors = polyp.detectors = []

/**
 * Check a file for features used
 * and return a list of detected features.
 *
 * @param {String} polyfillFile - the polyfill file for this feature
 * @param {Function|RegExp} usageTester - executed on a file's content to test if it contains usages of this feature
 * @param {Function} featureTester - a function that will test the support of the feature in the browser
 *                                   it's purpose is to help decide which polyfill group to load.
 *                                   Should return a boolean value
 * */
polyp.detector = function ( polyfillFile, usageTester, featureTester ){
  detectors.push({
    file: path.join(__dirname, "../polyfills", polyfillFile + ".js"),
    testUsage: typeof usageTester == "function" ? usageTester : function ( content ){
      return usageTester.test(content)
    },
    featureTest: (featureTester || function (){
      return true
    }).toString()
  })
}

polyp.minify = function ( files ){
  return files.map(function ( src ){
    return "// " + path.basename(src, path.extname(src)) +
      "\n" +
      uglify.minify([src]).code
  }).join(";\n")
}

/**
 * Given a list of detectors assembles a browser script that tests for features
 * and if any of them fails a polyfill file is loaded.
 * @param {Object[]} detectors - a list of detectors
 * @param {String} polyfillScriptsSrc - the path of the polyfill script
 * @param {Function} done - callback with these arguments: (browserScript, polyfillScript)
 * */
polyp.assemble = function ( detectors, polyfillScriptsSrc, done ){
  var polyfillScript = polyp.minify(detectors.map(function ( detector ){
    return detector.file
  }))
  var featureTesters = detectors.map(function ( detector ){
    return detector.featureTest
  }).join(",\n")
  var browserPolyp = fs.readFileSync(BROWSER_POLYP, "utf8") +
    "\n" +
    "polyp.test( [" + featureTesters + "], '" + polyfillScriptsSrc + "' )"
  browserPolyp = uglify.minify([browserPolyp], {fromString: true}).code
  done(browserPolyp, polyfillScript)
}

/**
 * Detect feature usage in files
 * output a browser script including feature tests for them
 * and a single script containing polyfills for all.
 * @param {String} files - file path to crawl
 * @param {Object} options - options
 * @param {String} options.dest - the path of the polyfill script
 *                                the browser plugin will load it async if any of
 *                                the feature tests fail
 * @param {Function} done - callback with these arguments: (error, browserScript, polyfillScript)
 * */
polyp.crawl = function ( files, options, done ){
  options = options || {}
  var detected = []

  async.each(files, function ( src, next ){
    fs.readFile(src, "utf8", function ( err, content ){
      if ( err ) {
        next(err)
        return
      }
      detectors.forEach(function ( polyfill ){
        // skip testing the file if the feature was detected previously
        if ( ~detected.indexOf(polyfill) || !polyfill.testUsage(content) ) return
        detected.push(polyfill)
      })
      next()
    })
  }, function ( err ){
    if ( err ) {
      done(err)
    }
    else {
      polyp.assemble(detected, options.dest, function ( browserScript, polyfillScript ){
        done(null, browserScript, polyfillScript)
      })
    }
  })
}

require("./detectors")(polyp)