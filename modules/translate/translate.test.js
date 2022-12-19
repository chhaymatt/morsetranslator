import { englishToMorse, morseToEnglish } from "./translate.js";
import { dictionary } from "../data/data";

describe("Translating English to Morse correctly", () => {
	// Test data
	const testData = {
		1: "Hello",
		2: "Hello there!",
		3: "123 456 890",
		4: "abcdefghijklmnopqrstuvwxyz",
		5: "https://google.com.au",
		6: "chhaymatt@gmail.com",
		7: "-pple.. ..B-n-n- C-.-rrot",
		8: "This is a test message!",
	};

	// Calling function and assertions
	test(`Testing ${testData[1]} and | separator`, () => {
		expect(englishToMorse(testData[1], dictionary, false)).toBe(
			".... . .-.. .-.. ---"
		);
	});
	test(`Testing ${testData[2]} and | separator`, () => {
		expect(englishToMorse(testData[2], dictionary, false)).toBe(
			".... . .-.. .-.. ---|- .... . .-. . -.-.--"
		);
	});
	test(`Testing ${testData[3]} and | separator`, () => {
		expect(englishToMorse(testData[3], dictionary, false)).toBe(
			".---- ..--- ...--|....- ..... -....|---.. ----. -----"
		);
	});
	test(`Testing ${testData[4]} and | separator`, () => {
		expect(englishToMorse(testData[4], dictionary, false)).toBe(
			".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.."
		);
	});
	test(`Testing ${testData[5]} and | separator`, () => {
		expect(englishToMorse(testData[5], dictionary, false)).toBe(
			".... - - .--. ... ---... -..-. -..-. --. --- --- --. .-.. . .-.-.- -.-. --- -- .-.-.- .- ..-"
		);
	});
	test(`Testing ${testData[6]} and | separator`, () => {
		expect(englishToMorse(testData[6], dictionary, false)).toBe(
			"-.-. .... .... .- -.-- -- .- - - .--.-. --. -- .- .. .-.. .-.-.- -.-. --- --"
		);
	});
	test(`Testing ${testData[7]} and | separator`, () => {
		expect(englishToMorse(testData[7], dictionary, false)).toBe(
			"-....- .--. .--. .-.. . .-.-.- .-.-.-|.-.-.- .-.-.- -... -....- -. -....- -. -....-|-.-. -....- .-.-.- -....- .-. .-. --- -"
		);
	});
	test(`Testing ${testData[8]} and * separator`, () => {
		expect(englishToMorse(testData[8], dictionary, true)).toBe(
			"- .... .. ...*.. ...*.-*- . ... -*-- . ... ... .- --. . -.-.--"
		);
	});
});

describe("Translating Morse to English correctly", () => {
	// Test data
	const testData = {
		1: ".... . .-.. .-.. ---",
		2: ".... . .-.. .-.. ---|- .... . .-. . -.-.--",
		3: ".---- ..--- ...--|....- ..... -....|---.. ----. -----",
		4: ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..",
		5: ".... - - .--. ... ---... -..-. -..-. --. --- --- --. .-.. . .-.-.- -.-. --- -- .-.-.- .- ..-",
		6: "-.-. .... .... .- -.-- -- .- - - .--.-. --. -- .- .. .-.. .-.-.- -.-. --- --",
		7: "-....- .--. .--. .-.. . .-.-.- .-.-.-|.-.-.- .-.-.- -... -....- -. -....- -. -....-|-.-. -....- .-.-.- -....- .-. .-. --- -",
		8: "- .... .. ...*.. ...*.-*- . ... -*-- . ... ... .- --. . -.-.--",
	};

	// Calling function and assertions
	test("Test Morse 1", () => {
		expect(morseToEnglish(testData[1], dictionary, false)).toBe("HELLO");
	});
	test("Test Morse 2", () => {
		expect(morseToEnglish(testData[2], dictionary, false)).toBe(
			"HELLO THERE!"
		);
	});
	test("Test Morse 3", () => {
		expect(morseToEnglish(testData[3], dictionary, false)).toBe(
			"123 456 890"
		);
	});
	test("Test Morse 4", () => {
		expect(morseToEnglish(testData[4], dictionary, false)).toBe(
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		);
	});
	test("Test Morse 5", () => {
		expect(morseToEnglish(testData[5], dictionary, false)).toBe(
			"HTTPS://GOOGLE.COM.AU"
		);
	});
	test("Test Morse 6", () => {
		expect(morseToEnglish(testData[6], dictionary, false)).toBe(
			"CHHAYMATT@GMAIL.COM"
		);
	});
	test("Test Morse 7", () => {
		expect(morseToEnglish(testData[7], dictionary, false)).toBe(
			"-PPLE.. ..B-N-N- C-.-RROT"
		);
	});
	test("Test Morse 8", () => {
		expect(morseToEnglish(testData[8], dictionary, true)).toBe(
			"THIS IS A TEST MESSAGE!"
		);
	});
});
