// const pattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const patternMorse = /[ *-.|]/g;
const patternLetters = /[A-Z0-9]/g;

/**
 * Checks if the input is Morse or English
 * @param {string} input the input value
 * @returns boolean, true if in Morse or false in English
 */
export const isInputMorse = (input) => {
    const inputTrimSplit = input.trim().toUpperCase();
    if (patternMorse.test(inputTrimSplit) && !patternLetters.test(inputTrimSplit)) {
        // Assume Morse input due to *-|. characters and NO A-Z or number characters
        console.log("Detected Morse in string:", inputTrimSplit)
        return true;
    } else {
        // Assume English input
        return false;
    }
}



