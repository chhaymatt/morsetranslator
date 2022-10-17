// const pattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const patternMorse = /[ *-.|]/g;
const patternLetters = /[A-Z]/g;

/**
 * Checks if the input is Morse or English
 * @param {string} input the input value
 * @returns boolean, true if in Morse or false in English
 */
export const isInputMorse = (input) => {
    const inputTrimSplit = input.trim().toUpperCase();
    if (pattern.test(inputTrimSplit) && !pattern2.test(inputTrimSplit)) {
        // Assume Morse input due to *-|. characters and NO A-Z characters
        return true;
    } else {
        // Assume English input
        console.log("English!", inputTrimSplit);
        return false;
    }
}



