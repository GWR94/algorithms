// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let arr = str.split(' ');
	let capital = '';
	for (word of arr) {
		capital += word.substring(0, 1).toUpperCase();
		if (word.length > 1) {
			capital += word.substring(1);
		}
		capital += ' '
	}
	console.log(capital.trim());
	return capital.trim();
}

capitalize('a short sentence');

module.exports = capitalize;
