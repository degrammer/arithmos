import { createBenchmark } from "../benchmarks/index.mjs"
import { containPermutation } from "./permutation-in-string.mjs"

function loadBenchmark() {
	const benchmark = createBenchmark("leetcode", "permutations", 1)

	const suite = benchmark.createSuite("permutations")

	suite.add("ab", () => {
		containPermutation("ab", "eidbaooo")
	})

	suite.ref("ab", () => {
		containPermutation("ab", "eidboaoo")
	})

	suite.ref("prosperity", () => {
		containPermutation("prosperity", "properties")
	})

	benchmark.run()
}

loadBenchmark()
