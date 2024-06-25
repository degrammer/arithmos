import { describe, it } from "node:test"
import assert from "node:assert/strict"
import {
	calculateMantisseAndCharacteristic,
	printCalculation,
	calculatePowerIterative,
} from "./parts.mjs"

describe("Logarithms test suite", () => {
	describe("Prints calculation properly", () => {
		describe("For n=500", () => {
			it("Should print Log(500) = Log(10^2*5)", () => {
				assert.strictEqual(printCalculation(500), "Log(500) = Log(10^2*5)")
			})
		})

		describe("For n=400", () => {
			it("Should print Log(400) = Log(10^2*4)", () => {
				assert.strictEqual(printCalculation(400), "Log(400) = Log(10^2*4)")
			})
		})

		describe("For n=2", () => {
			it("Should print Log(2) = Log(10^0*2)", () => {
				assert.strictEqual(printCalculation(2), "Log(2) = Log(10^0*2)")
			})
		})

		describe("For n=1", () => {
			it("Should print Log(1) = Log(10^0*2)", () => {
				assert.strictEqual(printCalculation(1), "Log(1) = Log(10^0*1)")
			})
		})

		describe("For n=0", () => {
			it("Should print Log(0) = Log(10^0*2)", () => {
				assert.strictEqual(
					printCalculation(0),
					"Cannot calculate formula for this value for base 10",
				)
			})
		})
	})

	describe("Calculate mantisse and characteristic", () => {
		describe("For n=500", () => {
			it("For Log(500) ~ 2,69897", () => {
				const { mantisse, characteristic, result } =
					calculateMantisseAndCharacteristic(500)

				assert.deepEqual(
					{
						mantisse,
						characteristic,
					},
					{
						mantisse: 0.6989700043360189,
						characteristic: 2,
					},
				)

				assert.strictEqual(result, 2.6989700043360187)
			})
		})

		describe("When using non-recursive approach", () => {
			it("It calculates properly the power", () => {
				assert.strictEqual(calculatePowerIterative(2, false), 1)
			})
		})
	})
})
