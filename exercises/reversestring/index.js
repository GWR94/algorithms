// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
		debugger;
	}
	return reversed;
}

reverse('abcd');
module.exports = reverse;

//: Easiest way
// return str
// 	.split('')
// 	.reverse()
// 	.join('');

//? Reduce shortened
// return str.split('').reduce((reversed, char) => char + reversed, '');

//? Reduce full
// return str.split('').reduce((rev, char) => {
// 	//rev is initial value (2nd param of callback)
// 	return char + rev; // return current character to start of rev
// }, ''); // '' is initial value

//? For of loop
// let reversed = '';

// for(let char of str) {
// 	reversed = char + reversed;
// }
// return reversed;

//! Backwards loop - not advised
// let reversed = '';
// let arr = str.split('');
// for (var i = str.length - 1; i >= 0; i--) {
// 	reversed += arr[i];
// 	console.log(reversed);
// }
// return reversed;
