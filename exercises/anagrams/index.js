// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//: Best solution - sorting
function anagrams(a, b) {
	return cleanString(a) === cleanString(b); //if both are equal, then the two strings must be an anagram.
}

function cleanString(str) {
	return str
		.replace(/[^\w]g/, '') //replace invalid chars (not numbers/letters)
		.split('') //put the replaced string in an array
		.sort() //sort the array alphabetically
		.join(''); //join the array to make a string again.
}

//? First Solution
// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

// 	for(let char in bCharMap) {
// 		if(aCharMap[char] !== bCharMap[char]) return false;
// 	}
// 	return true;
// }

// function buildCharMap(string) {
// 	var charSet = {};
// 	for (let char of string.replace(/[^\w]/g, '')) {
// 		charSet[char] = charSet[char] + 1 || 1;
// 	}
// 	return charSet;
// }

anagrams('One one', 'One one c');

//: My solution
// function anagrams(stringA, stringB) {
// 	var formattedA = replaceInvalid(stringA);
// 	var formattedB = replaceInvalid(stringB);

// 	var objA = getCharCount(formattedA);
// 	var objB = getCharCount(formattedB);

// 	var longest = formattedA.length < formattedB.length ? formattedB : formattedA;
// 	for (let char of longest) {
// 		if (objA[char] !== objB[char]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function getCharCount(string) {
	var charSet = {};
	for (let char of string) {
		charSet[char] = charSet[char] + 1 || 1;
	}
	return charSet;
}

function replaceInvalid(string) {
	return string.replace(/[^\w]/g, '').toLowerCase();
}

module.exports = anagrams;
