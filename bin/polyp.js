#!/usr/bin/env node

var path = require("path")
var fs = require("fs")

var argv = require('minimist')(process.argv.slice(2))
var inquirer = require("inquirer")
var chalk = require("chalk")
var async = require("async")
var task = argv._[0]

var cwd = process.cwd()

var polyp = require("../lib/polyp")

switch( task ){
  case "tests":
    polyp.generateTests()
    break
  // UPDATE
  case "update":
    console.log("Updating feature list from caniuse data..")
    polyp.update(function( support ){
      console.log("Last updated: ", new Date(support.updated))
    })
    break

  // AUTOUPDATE
  case "autoupdate":
    break

  // CRAWL
  case "crawl":
    if( !argv.f ) throw new Error("Missing argument -f (path)")
    var out = argv.out || "./"
    polyp.crawl([argv.f], {
      dir: out
    }, function( err, polyfills, featuretests ){
      for( var src in polyfills ){
        fs.writeFileSync(src, polyfills[src])
      }
      // write the polyp script
      fs.writeFileSync(path.join(out, "polyp.js"), featuretests)
    })
    break

  // FEATURES
  case "features":
    console.log(chalk.green("Features:"))
    polyp.getFeatures(function( features ){
      var name, title, descr
      for( name in features ){
        title = chalk.blue(features[name].title)
        descr = features[name].description
        name = chalk.blue.bold(name)
        console.log(name+" - "+title+"\n  "+descr)
      }
    })
    break
  case "assemble":
    if( !argv.f ) throw new Error("Missing argument -f (path)")
    polyp.getPolyfills(function( fills ){
      var obj = {}
      fills = fills.map(function( src ){
        var name = path.basename(src, path.extname(src))
        obj[name] = src
        return name
      })
      inquirer.prompt([{
        type: "checkbox",
        name: "polyfills",
        message: "Select polyfills.",
        choices: fills
      }], function( answer ){
        fills = answer.polyfills.map(function( name ){
          return obj[name]
        })
        polyp.assemble(fills, function( file, polyfill, loader ){
          fs.writeFile(argv.f, file, function( err ){
            if( err ) console.warn(err)
            else console.log("Created polyfill '%s'", argv.f)
          })
        })
      })
    })
    break

  // HELP
  case "help":
  default:
    console.log([
      "====================== POlyP ======================",

      "commands:",
        "\thelp \t\tprint out this message",
        "\tupdate \t\trefresh the feature support list from the caniuse data",
        "\tautoupdate \tset the time autoupdate is performed",
        "\tpolyfill \tlist available polyfills",
        "\tassemble \tcreate a concatenated file from a list of polyfills",
        "\tfeatures \tprint out the detectable features"
    ].join("\n"))
}