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

// Starting with a single word
const word = "HEY";
const letters = word.split("");
console.log(letters);
const morseWordArr = letters.map(letter => dictionary[letter]);
console.log(morseWordArr);
const joinedMorseWordArr = morseWordArr.join(" ");
console.log(joinedMorseWordArr);







// const englishInput = "Hello there! My name is Matt!";
// const englishUpper = englishInput.toUpperCase();
// console.log(englishUpper);

// const englishUpperWords = englishUpper.split(" ");
// console.log(englishUpperWords);
// const englishUpperWord = englishUpperWords.map(word => word.split(""));
// console.log(englishUpperWord);