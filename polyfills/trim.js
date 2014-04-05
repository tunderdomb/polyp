/**
 * String.prototype.trim Polyfill
 */

if( !String.prototype.trim ) String.prototype.trim = (function() {

	var trimRegex = /(^\s+|\s+$)/g;

	return function() {
		return this.replace(trimRegex, '');
	};

}())
