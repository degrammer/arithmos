import { describe, it } from "node:test"

import assert from "node:assert"

import { isPalindrome } from "./palindrome.mjs"

describe("Palindrome test suite", () => {
	it("Should return True for a valid Palindrome", () => {
		assert.deepStrictEqual(isPalindrome("madam"), true)
		assert.deepStrictEqual(isPalindrome("Racecar"), true)
		assert.deepStrictEqual(isPalindrome("anna"), true)
		assert.deepStrictEqual(isPalindrome("Civic"), true)
		assert.deepStrictEqual(isPalindrome("Rotor"), true)
		assert.deepStrictEqual(isPalindrome("Kayak"), true)
		assert.deepStrictEqual(isPalindrome("Noon"), true)
		assert.deepStrictEqual(isPalindrome("Radar"), true)
		assert.deepStrictEqual(isPalindrome("Reviver"), true)
	})

	it("Should return False for an invalid Palindrome", () => {
		assert.equal(isPalindrome("bencho"), false)
		assert.equal(isPalindrome("airplane"), false)
	})
})
