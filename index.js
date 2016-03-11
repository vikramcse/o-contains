'use strict'

module.exports = function(obj, attrs) {
	if (obj == null) return false;

	var keys = Object.keys(attrs);
	var length = keys.length;

	for (var i = 0; i < length; i++) {
		var key = keys[i];
		if (attrs[key] !== obj[key] || !(key in obj)) return false;
	}

	return true;
};