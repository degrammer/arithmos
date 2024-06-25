import assert from "node:assert"
import { describe, it } from "node:test"

import { searchNumber, searchNumberV2 } from "./binarySearch.mjs"

describe("Binary search", () => {
	describe("Only numbers", () => {
		it("Should find a number that exists in the collection", () => {
			const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			assert.equal(searchNumber(4, collection), 3)
			assert.equal(searchNumber(8, collection), 7)
			assert.equal(searchNumber(10, collection), 9)
		})

		it("Should find a number that exists in the collection of n=1", () => {
			const collection = [1]
			assert.equal(searchNumber(1, collection), 0)
		})
	})

	describe("Only numbers v2", () => {
		it("Should find a number that exists in the collection", () => {
			const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			assert.equal(searchNumberV2(4, collection), 3)
			assert.equal(searchNumberV2(8, collection), 7)
			assert.equal(searchNumberV2(10, collection), 9)
		})
	})
})
