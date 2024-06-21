import { createBenchmark } from "../benchmarks/index.mjs"
import { calculateMantisseAndCharacteristic } from "./parts.mjs"

function loadBenchmark() {
	const benchmark = createBenchmark(
		"logaritmhs",
		"calculateMantisseAndCharacteristic",
		1000,
	)

	const suite = benchmark.createSuite("calculateMantisseAndCharacteristic")

	suite.add("Recursion (1)", () => {
		calculateMantisseAndCharacteristic(1)
	})

	for (const n of [2, 3, 100, 500, 1000, 10000, 1000000]) {
		suite.ref(`Recursion ${n}`, () => {
			calculateMantisseAndCharacteristic(500)
		})
	}
	benchmark.run()
}

loadBenchmark()
