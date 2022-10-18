import { dictionary } from "./modules/data/data.js";
import { morseToEnglish, englishToMorse } from "./modules/translate/translate.js";
import { isInputMorse } from "./modules/autodetect/isInputMorse.js";

const words = "Hey my name is Matthew";
const morse = ".... . -.--|-- -.--|-. .- -- .|.. ...|-- .- - - .... . .--";

console.log(englishToMorse(words, dictionary, false));
console.log(morseToEnglish(morse, dictionary, false));

// Settings
let morseSeparator = false; // Words will be separated by | if false otherwise *

// ID elements
const input = document.getElementById("input");
const output = document.getElementById("output");
const languageFrom = document.getElementById("languageFrom");
const languageTo = document.getElementById("languageTo");
const copyInputButton = document.getElementById("copyInputButton");
const copyOutputButton = document.getElementById("copyOutputButton");
const separateButton = document.getElementById("separateButton");
const clearButton = document.getElementById("clearButton");
const footerText = document.getElementById("footerText");
const playInputButton = document.getElementById("playInputButton");
const playOutputButton = document.getElementById("playOutputButton");


const display = (input, morseSeparator) => {
    const autoDetect = isInputMorse(input.value);
    let result;
    if (autoDetect) {
        result = morseToEnglish(input.value, dictionary, morseSeparator);
        languageFrom.innerText = "Morse";
        languageTo.innerText = "English";
        playInputButton.classList.add("hidden");
        playOutputButton.classList.remove("hidden");
    } else {
        result = englishToMorse(input.value, dictionary, morseSeparator)
        languageFrom.innerText = "English";
        languageTo.innerText = "Morse";
        playInputButton.classList.remove("hidden");
        playOutputButton.classList.add("hidden");
    }
    output.textContent = result;
}

// Change the separator boolean and separateButton text handler
const switchSeparator = (element) => {
    morseSeparator = !morseSeparator;
    if (morseSeparator) {
        element.innerHTML = "Separating words by <i class='fa-solid fa-asterisk'></i>";
    } else {
        element.innerHTML = "Separating words by <b>|</b>";
    }
    display(input, morseSeparator);
}

// Clear input handler
const clearInput = () => {
    input.value = "";
    output.innerText = "Translation";
}

// Copy input/output handler
const copy = (element) => {
    // Do nothing if undefined
    if (typeof element.innerText !== "undefined" || typeof element.value !== "undefined") {

        // Check if element is from input or from output
        if (element.id === "input") {
            navigator.clipboard.writeText(element.value);
        } else {
            navigator.clipboard.writeText(element.innerText);
        }   
    }
}

// Translate whenever there is a change to the input text area or when switching from or to Morse
input.addEventListener("input", () => display(input, morseSeparator));

// CopyButton to callback
copyInputButton.addEventListener("click", () => copy(input));
copyOutputButton.addEventListener("click", () => copy(output));

// SeparateButton to callback
separateButton.addEventListener("click", () => switchSeparator(separateButton));

// ClearButton to callback
clearButton.addEventListener("click", clearInput);

// Check if text to speech is supported on user's browser
if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
} else {
    playInputButton.remove();
    playOutputButton.remove();
}

const textToSpeech = (element) => {
    if (typeof element.innerText !== "undefined" || typeof element.value !== "undefined") {
        const msg = new SpeechSynthesisUtterance();
        // Check if element is from input or from output
        if (element.id === "input") {
            msg.text = element.value;
        } else {
            msg.text = element.innerText;
        }   
        msg.voice = speechSynthesis.getVoices().find(voice => voice.voiceURI === "Karen"); // "Alex", "Karen"
        window.speechSynthesis.speak(msg);
    }
   
}

// Play text to speech
playInputButton.addEventListener("click", () => textToSpeech(input));
playOutputButton.addEventListener("click", () => textToSpeech(output));

// Run text to speech on page load to fix voice (no sound will be played due to lack of input)
textToSpeech(input);

// Update footer year
footerText.innerText = `${new Date().getFullYear()} | Matthew Chhay`;
