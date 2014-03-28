
var polyp = require("../lib/polyp")

module.exports = function ( grunt ){

  grunt.registerMultiTask("polyp", "", function (){
    var options = this.options({
      browsers: [],
      features: [],
      supported: 90,
      partiallySupported: 60,
      notSupported: 40
    })

    this.files.forEach(function( filePair ){
      filePair.src.forEach(function( src ){

      })
    })
  })

}