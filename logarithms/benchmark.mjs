import { createBenchmark } from "../benchmarks/index.mjs"
import { calculateMantisseAndCharacteristic } from "./parts.mjs"

function loadBenchmark() {
	const benchmark = createBenchmark(
		"logaritmhs",
		"calculateMantisseAndCharacteristic",
		1000,
	)

	const suite = benchmark.createSuite("calculateMantisseAndCharacteristic")

	suite.add("Recursion 1", () => {
		calculateMantisseAndCharacteristic(1)
	})

	const operations = [
		2,
		3,
		100,
		500,
		1000,
		10000,
		1000000,
		1000000 * 2,
		1000000 * 3,
	]

	for (const n of operations) {
		suite.ref(`Recursion ${n}`, () => {
			calculateMantisseAndCharacteristic(n)
		})
	}
	// benchmark.run()

	suite.add("Iterative 1", () => {
		calculateMantisseAndCharacteristic(1, { useRecursion: false })
	})

	for (const n of operations) {
		suite.ref(`Iterative ${n}`, () => {
			calculateMantisseAndCharacteristic(n, {
				useRecursion: false,
			})
		})
	}

	benchmark.run()
}

loadBenchmark()
