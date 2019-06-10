const assert = require('assert')
const kata = require('./kata')

describe('6-kyu/bit-counting', () => {
	it('should return 0', () => {
		assert.strictEqual(kata.countBits(0), 0)
	})
	it('should return 1', () => {
		assert.strictEqual(kata.countBits(4), 1)
	})
	it('should return 3', () => {
		assert.strictEqual(kata.countBits(7), 3)
	})
	it('should return 2', () => {
		assert.strictEqual(kata.countBits(9), 2)
	})
	it('should return 10', () => {
		assert.strictEqual(kata.countBits(10), 2)
	})
})
