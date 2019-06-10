exports.countBits = function(number) {
	return number
		.toString(2)
		.split('')
		.map(value => Number(value))
		.reduce((accumulator, value) => accumulator + value, 0)
}
