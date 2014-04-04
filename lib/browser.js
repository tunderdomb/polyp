var polyp = (function ( f ){
  return f()
}(function (  ){
  var listeners = []
    , jobsDone = false
    , docElement = document.documentElement

  function test( tests ){
    var i = -1, l = tests.length
    while ( ++i < l ) {
      // if anything fails, load the whole bunch of everything.
      // this is the compromise we make for the one round trip
      // and this is the reason we classify features into support groups
      // so it's more likely that features in one group will needed to be polyfilled
      if ( !tests[i](docElement, polyp) ) return false
    }
    return true
  }

  function load( src ){
    var script = document.createElement("script")
    script.src = src
    script.async = false
    document.head.appendChild(script)
    script.onload = function (){
      while ( listeners.length ) listeners.shift()()
      listeners = null
      jobsDone = true
    }
  }

  /**
   * Notify listeners that polyfills are loaded
   * */
  function broadcast(){
    while ( listeners.length ) listeners.shift()()
    listeners = null
    jobsDone = true
  }

  function polyp( cb ){
    if ( jobsDone ) cb()
    else listeners.push(cb)
  }

  polyp.test = function ( troglodytes, retrofitters, futureStarters ){
    switch ( true ) {
      case test(troglodytes):
        load("troglodytesSrc")
        break
      case test(retrofitters):
        load("retrofittersSrc")
        break
      case test(futureStarters):
        load("futureStartersSrc")
        break
      default :
        broadcast()
    }
  }

  // simple helper API for feature testing
  polyp.isIn = function ( prop, tag ){
    return prop in document.createElement(tag)
  }

  polyp.testEvent = function ( event, element ){
    return ("on" + event) in (!element || typeof element == "string"
      ? document.createElement(element || "div")
      : element)
  }

  return polyp

}))