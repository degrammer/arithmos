import assert from "node:assert"
import { describe, it } from "node:test"
import { compressWords } from "./compression.mjs"

describe("Compression test suite", () => {
	it("Should compress the words properly", () => {
		const input = "Hello world!"
		assert.deepStrictEqual(
			["H", 1, "e", 1, "l", 3, "o", 2, "w", 1, "r", 1, "d", 1, "!", 1],
			compressWords(input),
		)
	})

	it("Should compress large words properly", () => {
		const input = `Shortbread powder tootsie roll bonbon cupcake macaroon jelly. 
        Oat cake pastry dessert cake toffee chocolate cake donut. `
		assert.deepStrictEqual(
			[
				"S",
				1,
				"h",
				2,
				"o",
				13,
				"r",
				7,
				"t",
				9,
				"b",
				3,
				"e",
				13,
				"a",
				10,
				"d",
				4,
				"p",
				3,
				"w",
				1,
				"s",
				4,
				"i",
				1,
				"l",
				5,
				"n",
				4,
				"c",
				8,
				"u",
				2,
				"k",
				4,
				"m",
				1,
				"j",
				1,
				"y",
				2,
				".",
				2,
				"O",
				1,
				"f",
				2,
			],
			compressWords(input),
		)
	})
})
