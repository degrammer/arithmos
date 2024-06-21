import { createBenchmark } from "../benchmarks/index.mjs"
import { calculateMantisseAndCharacteristic } from "./parts.mjs"

function loadBenchmark() {
	const benchmark = createBenchmark(
		"logaritmhs",
		"calculateMantisseAndCharacteristic",
		1000,
	)
	// TODO: Add more methods to allow comparative analysis.
	benchmark
		.createSuite("calculateMantisseAndCharacteristic")
		.add("Recursion", () => {
			calculateMantisseAndCharacteristic(500)
		})
	benchmark.run()
}

loadBenchmark()
