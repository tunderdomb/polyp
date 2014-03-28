var polyp = (function( M, P, featureList ){

  var listeners = []
    , modernized = false

  featureList.push({
    complete: function(  ){
      modernized = true
      while ( listeners.length && listeners.shift()() ){}
    }
  })

  P.modernized = function( listener ){
    if( modernized ) listener()
    else listener.push(listener)
  }

  P.modernize = function(  ){
    M.load(featureList)
  }

  return P
}( window.Modernizr, {}, [] ))