import * as data from "./modules/data.js";
import * as translate from "./modules/translate.js";

// const words = "Hey my name is Matthew";
// const morse = ".... . -.--|-- -.--|-. .- -- .|.. ...|-- .- - - .... . .--";

// console.log(translate.englishToMorse(words, data.dictionary, false));
// console.log(translate.morseToEnglish(morse, data.dictionary, false));

// Settings
let translateToEnglish = false;
let morseSeparator = false; // Words will be separated by | if false otherwise *

// ID elements
const input = document.getElementById("input");
const output = document.getElementById("output");
const languageFrom = document.getElementById("languageFrom");
const languageTo = document.getElementById("languageTo");
const languageRow = document.getElementsByClassName("translate__language");
const copyInputButton = document.getElementById("copyInputButton");
const copyOutputButton = document.getElementById("copyOutputButton");
const separateButton = document.getElementById("separateButton");
const clearButton = document.getElementById("clearButton");
const footerText = document.getElementById("footerText");

const display = (input, boolean, morseSeparator) => {
    const result = boolean ? translate.morseToEnglish(input.value, data.dictionary, morseSeparator) : translate.englishToMorse(input.value, data.dictionary, morseSeparator);
    output.textContent = result;
}

const switchLanguage = () => {
    translateToEnglish = !translateToEnglish;
    if (translateToEnglish) {
        languageFrom.innerText = "Morse";
        languageTo.innerText = "English";
        input.placeholder = "Enter text";
    } else {
        languageFrom.innerText = "English";
        languageTo.innerText = "Morse";
        input.placeholder = "Enter Morse";
    }
    display(input, translateToEnglish, morseSeparator);
}

const copy = (element) => {
    // Check for undefined
    if (typeof element.innerText !== "undefined" || typeof element.value !== "undefined") {

        // Check if element is from input or from output
        if (element.id === "input") {
            console.log(`Copied ${element.value}`);
            navigator.clipboard.writeText(element.value);
        } else {
            console.log(`Copied ${element.innerText}`);
            navigator.clipboard.writeText(element.innerText);
        }   
    }
}

// Change the separator boolean and separateButton text
const switchSeparator = () => {
    morseSeparator = !morseSeparator;
    if (morseSeparator) {
        separateButton.innerHTML = "Separating words by <i class='fa-solid fa-asterisk'></i>";
    } else {
        separateButton.innerHTML = "Separating words by <b>|</b>";
    }
    display(input, translateToEnglish, morseSeparator);
}

// Clear input text area
const clearInput = () => {
    input.value = "";
    output.innerText = "Translation";
}

// Translate whenever there is a change to the input text area or when switching from or to Morse
input.addEventListener("input", () => display(input, translateToEnglish, morseSeparator));
languageRow[0].addEventListener("click", switchLanguage);
languageRow[1].addEventListener("click", switchLanguage);

// CopyButton to callback
copyInputButton.addEventListener("click", () => copy(input));
copyOutputButton.addEventListener("click", () => copy(output));

// SeparateButton to callback
separateButton.addEventListener("click", switchSeparator);

// ClearButton to callback
clearButton.addEventListener("click", clearInput);

footerText.innerText = `${new Date().getFullYear()} | Matthew Chhay`;