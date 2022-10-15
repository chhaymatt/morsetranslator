// MORSE CODE ALPHABET
// https://www.sciencegateway.org/gr/morse.htm
// Additional characters
// https://mattfedder.com/blog/ham/MorseTranslater

const dictionary = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "'": ".----.",
    "?": "..--..",
    ":": "---...",
    "-": "-....-",
    "/": "-..-",
    "[": "-.--.",
    "(": "-.--.",
    "]": "-.--.-",
    ")": "-.--.-",
    '"': ".-..-.",
    "_": "..--.-",
    "=": "-...-",
    "+": ".-.-.",
    "@": ".--.-",
    " ": "|"
}

const englishToMorse = (input = "Hey my name is Matthew", separator = "|") => {
    const capitalise = input.toUpperCase(); // Capitalises every character
    const words = capitalise.split(" "); // Splits each word into an array element
    const wordsCharacters = words.map(word => word.split("")) // Splits each character into a nested array element
    const morseWordsCharacters = wordsCharacters.map(word => word.map(character => dictionary[character])); // Converts every character in each word to morse code
    const morseWords = morseWordsCharacters.map(character => character.join(" ")); // Joins each morse code chracter with a space
    const morse = morseWords.join(separator); // Adds separator character between each word
    return morse;
}

const words = "Hey my name is Matthew";
const joiner = "|";
 console.log(englishToMorse(words,joiner));



const morseToEnglish = (input = ".... . -.--|-- -.--|-. .- -- .|.. ...|-- .- - - .... . .--", separator = "|") => {
    const morse = input.split(separator); // Splits each word based on separator character
    console.log(morse);
    const morseCharacters = morse.map(character => character.split(" ")) // Splits every character into a nested array element
    console.log(morseCharacters);
    const wordsCharacters = morseCharacters.map(word => word.map(character => Object.keys(dictionary).find(key => dictionary[key] === character))); 
    // Object.keys(object).find(key => object[key] === value) finds the key based on value on an object.
    console.log(wordsCharacters);
    const words = wordsCharacters.map(word => word.join("")); // Joins every character together to form a word element
    console.log(words);
    const english = words.join(" "); // Joins each word to form a string;
    console.log(english);

    return english;
}

morseToEnglish();