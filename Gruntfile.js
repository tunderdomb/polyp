module.exports = function ( grunt ){

  grunt.initConfig({
    polyp: {
      test: {
        src: "test/*.*"
      }
    }
  })

  grunt.registerTask("default", ["polyp"])
}