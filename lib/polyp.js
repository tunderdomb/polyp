var https = require("https")
var path = require("path")
var fs = require("fs")

var async = require("async")
var chalk = require("chalk")

var tests = require("./tests")
var polyp = module.exports = {}

var TESTS_PATH = path.join(__dirname, "tests.js")
var SUPPORT_JSON_PATH = path.join(__dirname, "../", "support.json")
var SUPPORT_JSON_GIT = "https://raw.github.com/Fyrd/caniuse/master/data.json"


polyp.log = function(  ){
  console.log.apply(console, ["polyp "].concat([].slice.call(arguments)))
}

polyp.warn = function(  ){
  console.log.apply(console, ["polyp", chalk.bgYellow.black("WARN")].concat([].slice.call(arguments)))
}

polyp.error = function(  ){
  console.log.apply(console, ["polyp", chalk.bgRed.black("ERROR")].concat([].slice.call(arguments)))
}

polyp.ok = function(  ){
  console.log.apply(console, ["polyp", chalk.green("OK")].concat([].slice.call(arguments)))
}

/**
 * get the support data from caniuse
 * or use the local version if available
 * */
polyp.getData = function( done ){
  try {
    done(require(SUPPORT_JSON_PATH))
  }
  catch ( e ) {
    polyp.warn("Not found support.json, attempting to update..")
    try{
      polyp.update(done)
    }
    catch ( e ) {
      polyp.warn(chalk.red("Update failed"))
      console.warn(e)
    }
  }
}

polyp.support = function( files, options, done ){
  polyp.crawl(files, function( features ){
    var tiers = {}
      , troglodyte = options.troglodyte || 20
      , retro = options.retro = 80
      , futureStarter = options.futureStarter || 90

    tiers.troglodyte = {}
    tiers.retro = {}
    tiers.futureStarter = {}

    var feature
    for( var name in features ){
      feature = features[name]
      switch( true ){
        case feature.usage_perc_y >= futureStarter:
          tiers.futureStarter[name] = feature
          break
        case feature.usage_perc_y >= retro:
          tiers.retro[name] = feature
          break
        case feature.usage_perc_y >= troglodyte:
          tiers.troglodyte[name] = feature
          break
      }
    }
  })
}

polyp.crawl = function( files, done ){
  var features = {}
  polyp.getData(function( support ){
    async.each(files, function( src, next ){
      fs.readFile(src, "utf8", function( err, content ){
        polyp.test(content, path.extname(src.replace(".", "")), features, support)
        next(err)
      })
    }, function( err ){
      done(err, features)
    })
  })
}

/**
 * Check a file for features used
 * and return a list of detected features.
 * */
polyp.detect = function (  ){
}

/**
 * test the usage of a feature in a file
 * the test function should return a boolean value
 * indicating whether the feature is used in the file
 * if unsure, return false
 * @param content{String} the content of the file
 * @param type{String} the extension of the file e.g. "js", "css", "html"
 * @param features{Object} a hash to write the results into
 * @param support{Object} the support data in its entirety from caniuse
 * */
polyp.test = function ( content, type, features, support ){
  for ( var test in tests ) {
    if ( tests[test](content, type) ) {
      features[test] = support[test]
    }
  }
}

polyp.testOut = function( done ){
  polyp.features(function( features ){
    var name, title, descr
      , appends = ""
    for( name in features ){
      if ( !tests[name] ) {
        descr = features[name].description
        title = features[name].title
        appends += "\n" +
          "\n// " + title +
          "\n// " + descr +
          "\ntests['"+name+"'] = function( content, type ){}"
      }
    }
    fs.appendFileSync(TESTS_PATH, appends)
    done && done()
  })
}

polyp.update = function ( done ){
  https.get(SUPPORT_JSON_GIT, function ( res ){
    if ( res.statusCode == 200 ) {
      polyp.ok("GET", res.statusCode, SUPPORT_JSON_GIT)
      var data = ""
      res.on("data", function ( chunk ){
        data += chunk
      })
      res.on("end", function (){
        fs.writeFileSync(SUPPORT_JSON_PATH, data.toString(), "utf8")
        done && done(JSON.parse(data.toString()))
      })
    }
    else {
      polyp.error("GET", res.statusCode, SUPPORT_JSON_GIT)
      done && done()
    }
  })
}

polyp.features = function( done ){
  polyp.getData(function( support ){
    done(support.data)
  })
}