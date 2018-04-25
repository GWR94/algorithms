// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var charsMap = {}
	let max = 0;
	let maxChar;

	for(let char of str) {
		charsMap[char] = charsMap[char] + 1 || 1;
	}
	for(let char in charsMap) {
		if(charsMap[char] > max) {
			max = charsMap[char];
			maxChar = char;
		}
	}
	return charsMap;
}

console.log(maxChar('aabclkbbbjsdf'));
maxChar('abclkjsdf');

module.exports = maxChar;
