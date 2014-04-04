module.exports = function ( polyp ){

  // ====================== MISC ======================

  polyp.detect("JSON", "json", /JSON\.(parse|stringify)\(/, function (){
    return !!window.JSON
  })

  polyp.detect("bind", polyp.TROGLODYTE, /\.bind\(/, function (){
    return !!window.Function.prototype.bind
  })

  // left out methods from the regexp where the names could be confused with String methods like `indexOf`
  polyp.detect("Array", polyp.TROGLODYTE, /\.(pop|concat|forEach|isArray|push|join|every|reverse|some|shift|filter|sort|map|splice|reduce|unshift|reduceRight)\(/, function (){
    return (Array.prototype.pop
      && Array.prototype.concat
      && Array.prototype.forEach
      && Array.isArray
      && Array.prototype.push
      && Array.prototype.join
      && Array.prototype.every
      && Array.prototype.reverse
      && Array.prototype.some
      && Array.prototype.shift
      && Array.prototype.filter
      && Array.prototype.sort
      && Array.prototype.map
      && Array.prototype.splice
      && Array.prototype.reduce
      && Array.prototype.unshift
      && Array.prototype.reduceRight)
  })

  polyp.detect("trim", polyp.TROGLODYTE, /\.trim\(/, function (){
    return !!String.prototype.trim
  })

  polyp.detect("base64", polyp.TROGLODYTE, /\.(atob|btoa)\(/, function (){
    return !!(window.btoa && window.atob)
  })

  polyp.detect("console", polyp.TROGLODYTE, /console\.(memory|debug|error|info|log|warn|dir|dirxml|table|trace|assert|count|markTimeline|profile|profileEnd|time|timeEnd|timeStamp|timeline|timelineEnd|group|groupCollapsed|groupEnd|clear)\(/, function (){
    return !!window.JSON
  })

  // ====================== Date ======================

  polyp.detect("now", polyp.TROGLODYTE, /Date\.now\(/, function (){
    return !!Date.now
  })

  polyp.detect("toISOString", polyp.TROGLODYTE, /Date\.toISOString\(/, function (){
    return !!Date.toISOString
  })

  // ====================== Object ======================

  polyp.detect("keys", polyp.TROGLODYTE, /Object\.keys\(/, function (){
    return !!Object.keys
  })

  polyp.detect("getPrototypeOf", polyp.TROGLODYTE, /Object\.getPrototypeOf\(/, function (){
    return !!Object.getPrototypeOf
  })

  // ====================== DOM ======================
  polyp.detect("classList", polyp.TROGLODYTE, /\.classlist(add|remove|contains)\(/, function ( docElement, browserPolyp ){
    return browserPolyp.isIn("classList")
  })

  polyp.detect("dataset", polyp.TROGLODYTE, /dataset(\.[\w]+|\["?[\w+])/, function (docElement, browserPolyp){
    return browserPolyp.isIn("dataset")
  })

  polyp.detect("querySelectorAll", polyp.TROGLODYTE, /\.querySelector(All)?\(/, function (docElement, browserPolyp){
    return "querySelector" in document
  })

  polyp.detect("hashchange", "hashchange", /onhashchange||"hashchange"||'hashchange'/, function (docElement, browserPolyp){
    return browserPolyp.testEvent("hashchange", window)
  })

  polyp.detect("addEventListener", polyp.TROGLODYTE, /\.(add|remove)EventListener\(/, function( docElement ){
    return !!docElement.addEventListener
  })

  polyp.detect("xhr", polyp.TROGLODYTE, /\.(add|remove)EventListener\(/, function( docElement ){
    return "XMLHttpRequest" in window
  })

}