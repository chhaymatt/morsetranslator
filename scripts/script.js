import * as data from "./modules/data.js";
import * as translate from "./modules/translate.js";

const words = "Hey my name is Matthew";
const joiner = "|";
const morse = ".... . -.--|-- -.--|-. .- -- .|.. ...|-- .- - - .... . .--";

console.log(translate.englishToMorse(words, data.dictionary, joiner));
console.log(translate.morseToEnglish(morse, data.dictionary, joiner));

// Settings
let toEnglish = false;

// ID elements
const input = document.getElementById("input");
const output = document.getElementById("output");
const languageFrom = document.getElementById("languageFrom");
const languageTo = document.getElementById("languageTo");
const languageRow = document.getElementById("languageRow");

const display = (input, boolean, joiner) => {
    const result = boolean ? translate.morseToEnglish(input.value, data.dictionary, joiner) : translate.englishToMorse(input.value, data.dictionary, joiner);
    output.innerText = result;
}

const switchLanguage = () => {
    toEnglish = !toEnglish;
    if (toEnglish) {
        languageFrom.innerText = "Morse";
        languageTo.innerText = "English";
    } else {
        languageFrom.innerText = "English";
        languageTo.innerText = "Morse";
    }
    display(input, toEnglish, "|");
}
input.addEventListener("input", () => display(input, toEnglish, "|"));
languageRow.addEventListener("click", switchLanguage);

