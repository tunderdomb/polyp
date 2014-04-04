if ( !window.addEventListener ) {
  if ( window.attachEvent ) {
    window.addEventListener = function( event, cb, capture ){
      window.attachEvent(event, cb)
    }
  }
  if ( window.detachEvent ) {
    window.removeEventListener = function( event, cb, capture ){
      window.detachEvent(event, cb)
    }
  }
}