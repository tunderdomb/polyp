module.exports = function ( polyp ){

  // ====================== MISC ======================

  polyp.detector("JSON", /JSON\.(parse|stringify)\(/, function (){
    return !!window.JSON
  })

  polyp.detector("bind", /\.bind\(/, function (){
    return !!window.Function.prototype.bind
  })

  // left out methods from the regexp where the names could be confused with String methods like `indexOf`
  polyp.detector("Array", /\.(pop|concat|forEach|isArray|push|join|every|reverse|some|shift|filter|sort|map|splice|reduce|unshift|reduceRight)\(/, function (){
    return!!Array.prototype.pop
      || !!Array.prototype.concat
      || !!Array.prototype.forEach
      || !!Array.isArray
      || !!Array.prototype.push
      || !!Array.prototype.join
      || !!Array.prototype.every
      || !!Array.prototype.reverse
      || !!Array.prototype.some
      || !!Array.prototype.shift
      || !!Array.prototype.filter
      || !!Array.prototype.sort
      || !!Array.prototype.map
      || !!Array.prototype.splice
      || !!Array.prototype.reduce
      || !!Array.prototype.unshift
      || !!Array.prototype.reduceRight
  })

  polyp.detector("trim", /\.trim\(/, function (){
    return !!String.prototype.trim
  })

  polyp.detector("base64", /\.(atob|btoa)\(/, function (){
    return !!(window.btoa && window.atob)
  })

  polyp.detector("console", /console\.(memory|debug|error|info|log|warn|dir|dirxml|table|trace|assert|count|markTimeline|profile|profileEnd|time|timeEnd|timeStamp|timeline|timelineEnd|group|groupCollapsed|groupEnd|clear)\(/, function (){
    return !!window.JSON
  })

  // ====================== Date ======================

  polyp.detector("now", /Date\.now\(/, function (){
    return !!Date.now
  })

  polyp.detector("toISOString", /Date\.toISOString\(/, function (){
    return !!Date.toISOString
  })

  // ====================== Object ======================

  polyp.detector("keys", /Object\.keys\(/, function (){
    return !!Object.keys
  })

  polyp.detector("getPrototypeOf", /Object\.getPrototypeOf\(/, function (){
    return !!Object.getPrototypeOf
  })

  // ====================== DOM ======================

  polyp.detector("classList", /\.classlist(add|remove|contains)\(/, function ( docElement, browserPolyp ){
    return browserPolyp.isIn("classList")
  })

  polyp.detector("dataset", /dataset(\.[\w]+|\["?[\w+])/, function ( docElement, browserPolyp ){
    return browserPolyp.isIn("dataset")
  })

  polyp.detector("querySelectorAll", /\.querySelector(All)?\(/, function ( docElement, browserPolyp ){
    return "querySelector" in document
  })

  polyp.detector("hashchange", /onhashchange||"hashchange"||'hashchange'/, function ( docElement, browserPolyp ){
    return browserPolyp.testEvent("hashchange", window)
  })

  polyp.detector("addEventListener", /\.(add|remove)EventListener\(/, function ( docElement ){
    return !!docElement.addEventListener
  })

  polyp.detector("xhr", /\.(add|remove)EventListener\(/, function ( docElement ){
    return "XMLHttpRequest" in window
  })

}