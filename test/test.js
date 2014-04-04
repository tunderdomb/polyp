polyp(function(  ){
  Object.keys(JSON.parse('{" hey ": "ho", " let\'s    ": "go"}'))
    .map(function ( key ){
      return key.trim() + Date.now()
    })
    .forEach(console.log.bind(console))

  console.dir(Object.getPrototypeOf(this))

  Array.isArray(["div"].map(function ( selector ){
    return document.querySelector(selector)
  }).filter(function ( el ){
    return el ? el.classList.contains("boo") || el.dataset["hoo"] : false
  }))
})