/**
 * englishToMorse converts a string of English text into a string of morse code
 * @param {string} input A string of English text
 * @param {object} dictionary Dictionary of English characters and Morse code
 * @param {string} separator An optional single character to note word separation
 * @returns A string in Morse
 */
 export const englishToMorse = (input = "Hey my name is Matthew", dictionary, separator = "|") => {
    const capitalise = input.toUpperCase(); // Capitalises every character
    const words = capitalise.split(" "); // Splits each word into an array element
    const wordsCharacters = words.map(word => word.split("")) // Splits each character into a nested array element
    const morseWordsCharacters = wordsCharacters.map(word => word.map(character => dictionary[character])); // Converts every character in each word to morse code
    const morseWords = morseWordsCharacters.map(character => character.join(" ")); // Joins each morse code chracter with a space
    const morse = morseWords.join(separator); // Adds separator character between each word
    return morse;
}

/**
 * morseToEnglish converts a string of morse code into a string of English text
 * @param {string} input A string of morse code
 * @param {object} dictionary Dictionary of English characters and Morse code
 * @param {string} separator An optional single character to note word separation
 * @returns A string in English
 */
export const morseToEnglish = (input, dictionary, separator = "|") => {
    const morse = input.split(separator); // Splits each word based on separator character
    // console.log(morse);
    const morseCharacters = morse.map(character => character.split(" ")) // Splits every character into a nested array element
    // console.log(morseCharacters);
    const wordsCharacters = morseCharacters.map(word => word.map(character => Object.keys(dictionary).find(key => dictionary[key] === character))); 
    // Object.keys(object).find(key => object[key] === value) finds the key based on value on an object.
    // console.log(wordsCharacters);
    const words = wordsCharacters.map(word => word.join("")); // Joins every character together to form a word element
    // console.log(words);
    const english = words.join(" "); // Joins each word to form a string;
    // console.log(english);

    return english;
}



