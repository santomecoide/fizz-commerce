'use strict';

function ValidationError(msg = '') {
	this.message = msg;
	this.name = 'ValidationError';
}
ValidationError.prototype = Error.prototype;

module.exports = {
	ValidationError
};
