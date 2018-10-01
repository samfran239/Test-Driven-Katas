const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
	it('Returns empty string if empty string was provided', () => {
		expect(wrap('', 10)).to.equal('');
	});
	it('Does not exceed max length paramater', () => {
		expect(wrap('A smaller sentence', 10)).to.equal('A smaller \nsentence');
	});
	it('just trying a longer sentence', () => {
		expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)).to.equal(
			'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
		);
	});
});
