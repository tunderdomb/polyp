#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var chalk = require("chalk")
var task = argv._[0]

var cwd = process.cwd()

var polyp = require("../lib/polyp")

switch( task ){
  case "tests":
    polyp.testOut()
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

  // FEATURES
  case "features":
    console.log(chalk.green("Features:"))
    polyp.features(function( features ){
      var name, title, descr
      for( name in features ){
        title = chalk.blue(features[name].title)
        descr = features[name].description
        name = chalk.blue.bold(name)
        console.log(name+" - "+title+"\n  "+descr)
      }
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
        "\tfeatures \tprint out the detectable features"
    ].join("\n"))
}