// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
console.log(reverseInt(-15))
reverseInt(-15);

module.exports = reverseInt;

//
	// return Math.sign(n) < 0
	// ? Number('-' + n.toString().split('').splice(1).reverse().join(''))
	// : Number(n.toString().split('').reverse().join(''));