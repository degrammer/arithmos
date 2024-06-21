import Benchmarkify from "benchmarkify"

export function createBenchmark(name, moduleName, time) {
	const benchmark = new Benchmarkify(name, {
		time,
		description: `Benchmark for ${moduleName}`,
		chartImage: true,
	}).printHeader()

	return {
		createSuite: (name, suiteTime, suiteDescription) => {
			return benchmark.createSuite(name, {
				time: suiteTime || time,
				description: suiteDescription || `Suite for ${moduleName}`,
			})
		},

		get: () => benchmark,
		run: () => {
			return benchmark.run()
		},
	}
}
