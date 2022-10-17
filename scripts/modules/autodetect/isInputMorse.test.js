import { isInputMorse } from "./isInputMorse.js";

describe("Auto detecting Morse and English correctly", () => {  

    // Test data
    const testData = {
        1: "Hello World",
        2: "What's 1 2 3 going on?",
        3: "123 1 2 3",
        4: ".- ... . .-. .",
        5: "* | * |",
        6: ". | ..-- | ...",
        7: "* ..- .-.- * --.",
        8: "Hello... this is a .. -- . test | ! * Okay then!"
    }
    
    // Calling function and assertions
    test("Detects only English text as English", () => {
        expect(isInputMorse(testData[1])).toBe(false);
    })
    test("Detects English text and numbers as English", () => {
        expect(isInputMorse(testData[2])).toBe(false);
    })
    test("Detects numbers as English", () => {
        expect(isInputMorse(testData[3])).toBe(false);
    })
    test("Detects Morse as Morse", () => {
        expect(isInputMorse(testData[4])).toBe(true);
    })
    test("Detects Morse separators as Morse", () => {
        expect(isInputMorse(testData[5])).toBe(true);
    })
    test("Detects Morse and | separator as Morse", () => {
        expect(isInputMorse(testData[6])).toBe(true);
    })
    test("Detects Morse and * separator as Morse", () => {
        expect(isInputMorse(testData[7])).toBe(true);
    })
    test("Detects English text with punctuation as English", () => {
        expect(isInputMorse(testData[8])).toBe(false);
    })
})