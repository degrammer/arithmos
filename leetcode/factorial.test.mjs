import { it, describe } from "node:test"
import assert from "node:assert"
import { factorial, factorialRecursive } from "./factorial.mjs"

describe("Calculate factorial", () => {
	describe("Iterative", () => {
		it("1!", () => {
			assert.deepStrictEqual(factorial(1), 1)
		})
		it("0!", () => {
			assert.deepStrictEqual(factorial(0), 1)
		})
		it("3!", () => {
			assert.deepStrictEqual(factorial(3), 6)
		})
		it("4!", () => {
			assert.deepStrictEqual(factorial(4), 24)
		})
		it("5!", () => {
			assert.deepStrictEqual(factorial(5), 120)
		})
	})

	describe("Recursive", () => {
		it("1!", () => {
			assert.deepStrictEqual(factorialRecursive(1), 1)
		})
		it("0!", () => {
			assert.deepStrictEqual(factorialRecursive(0), 1)
		})
		it("3!", () => {
			assert.deepStrictEqual(factorialRecursive(3), 6)
		})
		it("4!", () => {
			assert.deepStrictEqual(factorialRecursive(4), 24)
		})
		it("5!", () => {
			assert.deepStrictEqual(factorialRecursive(5), 120)
		})
	})
})
