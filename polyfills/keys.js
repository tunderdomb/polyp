/**
 * Object.keys Polyfill
 */

if( !Object.keys ) Object.keys = (function() {

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	return function(obj) {
		if (obj !== Object(obj)) {
			throw new TypeError('Object.keys called on non-object');
		}
		var ret = [ ];
		for (var i in obj) {
			if (hasOwnProperty.call(obj, i)) {
				ret.push(i);
			}
		}
		return ret;
	};

}())
