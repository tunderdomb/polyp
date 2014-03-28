
var polyp = require("../lib/polyp")

module.exports = function ( grunt ){

  grunt.registerMultiTask("polyp", "", function (){
    var options = this.options({
      browsers: [],
      features: [],
      troglodyte: "",
      retro: "",
      futureStarter: ""
    })

    this.files.forEach(function( filePair ){
      filePair.src.forEach(function( src ){

      })
    })
  })

}