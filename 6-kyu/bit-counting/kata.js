exports.countBits = function(number) {
	return (number.toString(2).match(/1/g) || []).length
}
