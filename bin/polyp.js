#!/usr/bin/env node

var path = require("path")
var fs = require("fs")

var argv = require('minimist')(process.argv.slice(2))
var inquirer = require("inquirer")
var task = argv._[0]

var cwd = process.cwd()

var polyp = require("../lib/polyp")

switch( task ){

  // Generate stuff by crawling files
  case "crawl":
    if( !argv.f ) throw new Error("Missing argument -f (path)")
    polyp.crawl([argv.f], {
      dest: argv.out || "./polyfills.js"
    }, function( err, browserScript, polyfillScript ){
      fs.writeFileSync(path.join(cwd, "polyp.js"), browserScript)
      fs.writeFileSync(argv.out || "./polyfills.js", polyfillScript)
    })
    break

  // Select polyfills manually
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
        console.log(fills)
        fs.writeFile(argv.f, polyp.minify(fills), function( err ){
          if( err ) console.warn(err)
          else console.log("Created polyfill '%s'", argv.f)
        })

      })
    })
    break
}