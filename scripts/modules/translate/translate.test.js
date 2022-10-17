import { englishToMorse, morseToEnglish } from "./translate.js";

describe("Translating English to Morse correctly", () => {  

    // Test data
    const testData = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: ""
    }
    
    // Calling function and assertions
    test("Test Description", () => {
        expect(englishToMorse(testData[1])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[2])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[3])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[4])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[5])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[6])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[7])).toBe();
    })
    test("Test Description", () => {
        expect(englishToMorse(testData[8])).toBe();
    })
})

describe("Translating Morse to English correctly", () => {  

    // Test data
    const testData = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: ""
    }
    
    // Calling function and assertions
    test("Test Description", () => {
        expect(morseToEnglish(testData[1])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[2])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[3])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[4])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[5])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[6])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[7])).toBe();
    })
    test("Test Description", () => {
        expect(morseToEnglish(testData[8])).toBe();
    })
})