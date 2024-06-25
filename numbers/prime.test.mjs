import { it, describe } from "node:test"
import { calculatePrimes } from "./prime.mjs"
import assert from "node:assert"

describe("Prime numbers test suite", () => {
	it("Should calculate the prime numbers between 1 and 10", () => {
		assert.deepStrictEqual(
			calculatePrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
			[2, 3, 5, 7],
		)
	})

	it("Should calculate the prime numbers between 1 and 10", () => {
		assert.deepStrictEqual(
			calculatePrimes(Array.from({ length: 99 }, (_, index) => index + 2)),
			[
				2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
				71, 73, 79, 83, 89, 97,
			],
		)
	})
})
