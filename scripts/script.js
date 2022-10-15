import * as data from "./modules/data.js";
import * as translate from "./modules/translate.js";

const words = "Hey my name is Matthew";
const joiner = "|";
const morse = ".... . -.--|-- -.--|-. .- -- .|.. ...|-- .- - - .... . .--";

console.log(translate.englishToMorse(words, data.dictionary, joiner));
console.log(translate.morseToEnglish(morse, data.dictionary, joiner));


// Results
const englishResult = document.getElementById("englishResult");
const morseResult = document.getElementById("morseResult");

const displayMorse = () => {
    const englishInput = document.getElementById("englishInput");
    const result = translate.englishToMorse(englishInput.value, data.dictionary, joiner);
    morseResult.innerText = result;
}

const displayEnglish = () => {
    const morseInput = document.getElementById("morseInput");
    const result =  translate.morseToEnglish(morseInput.value, data.dictionary, joiner);
    englishResult.innerText = result;
}

// Buttons
const englishToMorseButton = document.getElementById("englishToMorseButton");
const morseToEnglishButton = document.getElementById("morseToEnglishButton");

// Click to handlers
englishToMorseButton.addEventListener("click", displayMorse);
morseToEnglishButton.addEventListener("click", displayEnglish);

