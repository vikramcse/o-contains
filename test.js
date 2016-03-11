var expect = require('chai').expect;
var objectContains = require('./index.js');

describe('tests for checking object contains', function() {
	it('should return true if the attribute contains in object', function() {
		expect(objectContains({name: 'vikram', age: 27}, {name: 'vikram'})).to.be.true;
	});

	it('should return false if the attribute contains in object', function() {
		expect(objectContains({name: 'vikram', age: 27}, {age: 55})).to.be.false;
	});

	it('should return true if the multile attribute contains in object', function() {
		expect(objectContains({name: 'vikram', age: 27}, {name: 'vikram', age: 27})).to.be.true;
	});

	it('should return false if the multile attribute contains in object', function() {
		expect(objectContains({name: 'vikram', age: 27}, {name: 'radheya', age: 27})).to.be.false;
	});
});