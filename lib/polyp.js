var https = require("https")
var path = require("path")
var fs = require("fs")
var glob = require("glob")
var uglify = require("uglify-js")

var async = require("async")
var chalk = require("chalk")

var tests = require("./tests")
var polyp = module.exports = {}

polyp.TROGLODYTE = 90
polyp.RETROFITTER = 60
polyp.FUTURE_STARTER = 80

var TESTS_PATH = path.join(__dirname, "tests.js")
var SUPPORT_JSON_PATH = path.join(__dirname, "../", "support.json")
var SUPPORT_JSON_GIT = "https://raw.github.com/Fyrd/caniuse/master/data.json"

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

/**
 * Update data from caniuse
 * */
polyp.update = function ( done ){
  https.get(SUPPORT_JSON_GIT, function ( res ){
    if ( res.statusCode == 200 ) {
      polyp.ok("GET", res.statusCode, SUPPORT_JSON_GIT)
      var data = ""
      res.on("data", function ( chunk ){
        data += chunk
      })
      res.on("end", function (){
        data = data.toString()
        fs.writeFileSync(SUPPORT_JSON_PATH, data, "utf8")
        done && done(JSON.parse(data))
      })
    }
    else {
      polyp.error("GET", res.statusCode, SUPPORT_JSON_GIT)
      done && done()
    }
  })
}

/**
 * Load the cached version of the caniuse json,
 * or attempt to update it from remote.
 * */
polyp.getData = function ( done ){
  try {
    done(require(SUPPORT_JSON_PATH))
  }
  catch ( e ) {
    polyp.warn("Not found support.json, attempting to update..")
    try {
      polyp.update(done)
    }
    catch ( e ) {
      polyp.error(chalk.red("Update failed"))
      console.error(e)
    }
  }
}

polyp.getFeatures = function ( done ){
  polyp.getData(function ( support ){
    done(support.data)
  })
}

polyp.getPolyfills = function ( done ){
  glob("../polyfills/*.js", {}, function ( err, files ){
    done(files)
  })
}

/**
 * Not sure what to use this for..
 * */
polyp.generateTests = function ( done ){
  polyp.getFeatures(function ( features ){
    var name, feature
      , appends = ""
    for ( name in features ) {
      feature = features[name]
      if ( !tests[name] ) {
        appends += "\n" +
          "\n// " + feature.title +
          "\n// " + feature.description +
          "\ntests['" + name + "'] = function( content, type ){}"
      }
    }
    fs.appendFileSync(TESTS_PATH, appends)
    done && done()
  })
}

polyp.crawl = function ( files, options, done ){
  options = options || {}
  options.tiers = options.tiers || {
    60: "troglodyte.js",
    20: "future-starter.js",
    40: "retrofitter.js"
  }

  var polyfills = {}
  var tiers = []
  var featureTests = {}
  var detected = {}

  for( var usagePercent in options.tiers ){
    tiers.push({
      support: usagePercent-0,
      src: options.tiers[usagePercent]
    })
    polyfills[options.tiers[usagePercent]] = []
  }
  tiers = tiers.sort(function( a, b ){
    return a.support - b.support
  })

  polyp.getFeatures(function ( features ){
    async.each(files, function ( src, next ){
      fs.readFile(src, "utf8", function ( err, content ){
        if ( err ) {
          next(err)
          return
        }

        detectors.forEach(function ( detector ){
          // previously detected, or not used in the file
          if ( detected[detector.polyfill] || !detector.testUsage(content) ) return
          detected[detector.polyfill] = true

          var usage = detector.support in features
            // use canisuse support data
            ? features[detector.support].usage_perc_y
            // or user defined classification for sorting
            : detector.support

          tiers.forEach(function( tier ){
            if( usage >= tier.support ) {
              return true
            }
            polyfills[tier.src].push(detector.polyfill)
            featureTests[tier.src].push(detector.featureTest)
            return false
          })
        })
      })
    }, function( err ){
//      var browserTester = fs.readFileSync(path.join(__dirname, "browser.js"), "utf8")

//      done(err, polyfills, browserTester)
    })
  })








//  var TROGLODYTES = path.join(options.dir, "troglodytes.js")
//  var RETROFITTERS = path.join(options.dir, "retrofitters.js")
//  var FUTURE_STARTERS = path.join(options.dir, "future-starters.js")
//  var polyfillsFor = {}
//  var featureTestsFor = {}
//  var detected = {}
//
//  polyfillsFor[TROGLODYTES]= []
//  polyfillsFor[RETROFITTERS]= []
//  polyfillsFor[FUTURE_STARTERS]= []
//
//  featureTestsFor.troglodytes = []
//  featureTestsFor.retrofitters = []
//  featureTestsFor.futureStarters = []
//
//  var supported = options.supported || 90
//    , partiallySupported = options.partial || 60
//    , notSupported = options.notSupported || 20

  // secure usage data first, then crawl files
//
//  polyp.getFeatures(function ( features ){
//    async.each(files, function ( src, next ){
//      fs.readFile(src, "utf8", function ( err, content ){
//        if ( err ) {
//          next(err)
//          return
//        }
//
//        // use detectors on file
//        detectors.forEach(function ( detector ){
//          // previously detected, or not used in the file
//          if ( detected[detector.polyfill] || !detector.testUsage(content) ) return
//
//          detected[detector.polyfill] = true
//
//          var usage
//          // use canisuse support data
//          if ( detector.support in features ) {
//            usage = features[detector.support].usage_perc_y
//          }
//          // or user defined classification for sorting
//          else {
//            usage = detector.support
//          }
//
//          // sort polyfills according to browser support or user provided classification
//          switch ( true ) {
//            // if the feature is well supported,
//            // client must be a troglodyte not being able to use it
//            case usage == polyp.TROGLODYTE:
//            case usage >= supported:
//              polyfillsFor[TROGLODYTES].push(detector.polyfill)
//              featureTestsFor.troglodytes.push(detector.featureTest)
//              break
//
//            // a lot of features are implemented in slow motion
//            // client is often a retrofitter
//            case usage == polyp.RETROFITTER:
//            case usage == "retrofit" || usage >= partiallySupported:
//              // troglodytes need retrofit tier too
//              polyfillsFor[TROGLODYTES].push(detector.polyfill)
//              polyfillsFor[RETROFITTERS].push(detector.polyfill)
//              featureTestsFor.retrofitters.push(detector.featureTest)
//              break
//
//            // future starters, yay!
//            // client will probably never see output from these lines..
//            case usage == polyp.FUTURE_STARTER:
//            case usage == "future-starter" || usage <= notSupported:
//              // include future starter scripts for retro folks and troglodytes
//              polyfillsFor[TROGLODYTES].push(detector.polyfill)
//              polyfillsFor[RETROFITTERS].push(detector.polyfill)
//              polyfillsFor[FUTURE_STARTERS].push(detector.polyfill)
//              featureTestsFor.futureStarters.push(detector.featureTest)
//              break
//            default:
//              console.warn("Not an eligible value for classification: '%s'", usage)
//          }
//        })
//        next(err)
//      })
//    }, function ( err ){
//      var browserTester = fs.readFileSync(path.join(__dirname, "browser.js"), "utf8")
//
//      // combine and minify polyfill files
//      polyfillsFor[TROGLODYTES] = polyfillsFor[TROGLODYTES].length
//        ? uglify.minify(polyfillsFor.troglodytes).code
//        : null
//      polyfillsFor[RETROFITTERS] = polyfillsFor[RETROFITTERS].length
//        ? uglify.minify(polyfillsFor.retrofitters).code
//        : null
//      polyfillsFor[FUTURE_STARTERS] = polyfillsFor[FUTURE_STARTERS].length
//        ? uglify.minify(polyfillsFor.futureStarters).code
//        : null
//
//      // wire in feature tests into browser script
//      browserTester += "\n" +
//        "polyp.test(" +
//        "[" + featureTestsFor.troglodytes.join(",\n") + "]" + "," +
//        "[" + featureTestsFor.retrofitters.join(",\n") + "]" + "," +
//        "[" + featureTestsFor.futureStarters.join(",\n") + "]" +
//        ")"
//
//      // set polyfill destinations
//      browserTester = browserTester
//        .replace(/troglodytesSrc/, TROGLODYTES)
//        .replace(/retrofittersSrc/, RETROFITTERS)
//        .replace(/futureStartersSrc/, FUTURE_STARTERS)
//
////      browserTester = uglify.minify(browserTester, {fromString: true}).code
//
//      done(err, polyfillsFor, browserTester)
//    })
//  })
//
}

var detectors = []

/**
 * Check a file for features used
 * and return a list of detected features.
 *
 * @param {String} polyfillFile - the polyfill file for this feature
 * @param {String} [supportValue] - a feature name from the caniuse data (see `polyp features` for a complete list),
 *                                  or a member of Enum{"troglodyte", "retrofit", "future-starter"}
 *                                  this value is used to classify a feature into three groups
 *                                  based on their support
 * @param {Function|RegExp} usageTester - executed on a file's content to test if it contains usages of this feature
 * @param {Function} featureTester - a function that will test the support of the feature in the browser
 *                                   it's purpose is to help decide which polyfill group to load.
 *                                   Should return a boolean value
 * */
polyp.detect = function ( polyfillFile, supportValue, usageTester, featureTester ){
  detectors.push({
    polyfill: path.join(__dirname, "../polyfills", polyfillFile + ".js"),
    testUsage: typeof usageTester == "function" ? usageTester : function ( content ){
      return usageTester.test(content)
    },
    featureTest: (featureTester || function (){
      return true
    }).toString(),
    support: supportValue
  })
}

polyp.assemble = function ( files, done ){
  done(uglify.minify(files).code)
//  async.map(files, function( file, next ){
//    next(null, uglify.minify(file).code)
//  }, function( err, files ){
//    if( err ) throw err
//    done(files.join(";\n"))
//  })
}

require("./detectors")(polyp)