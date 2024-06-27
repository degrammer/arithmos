import { it, describe } from "node:test"

import assert from "node:assert"

import {
	getPermutations,
	containPermutation,
} from "./permutation-in-string.mjs"

describe("Permutations test suite", () => {
	it("Should calculate permutations for abc", () => {
		assert.deepStrictEqual(getPermutations("abc"), [
			"abc",
			"acb",
			"bac",
			"bca",
			"cab",
			"cba",
		])
	})

	it("containPermutation ab", () => {
		assert.deepStrictEqual(containPermutation("ab", "eidbaooo"), true)
	})

	it("containPermutation eidboaoo", () => {
		assert.deepStrictEqual(containPermutation("ab", "eidboaoo"), false)
	})

	it("containPermutation prosperity", () => {
		assert.deepStrictEqual(
			containPermutation("prosperity", "properties"),
			false,
		)
	})
})
