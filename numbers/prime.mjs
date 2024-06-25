/**
 * Prime numbers
 * Prime numbers are natural numbers that are divisible by only 1 and the number itself,
 * let's implement that in a function!
 */

/**
 *
 * @param {Array.<number>} data
 */
export function calculatePrimes(data) {
	/**
	 * Desktop test:
	 * 1. Iterate the collection of numbers
	 * 2. Check if the number is divisible only by 1 and itself, how?
	 * 3. The universe of the numbers to check will be limited to the collection of data
	 *
	 * Example:
	 *
	 * data: [1,2,3,4,5,6,7,8,9,10]
	 *
	 */
	const primes = []

	for (let index = 0; index < data.length; index++) {
		const value = data[index]
		if (value === 1) {
			continue
		}
		if ([2, 3].includes(value)) {
			primes.push(value)
		} else {
			const previousNumbers = data.slice(0, index)
			let isDivisibleForAnyPreviousNumber = false
			for (const number of previousNumbers) {
				if (value % number === 0 && value !== number && number !== 1) {
					isDivisibleForAnyPreviousNumber = true
					break
				}
			}

			if (!isDivisibleForAnyPreviousNumber) {
				primes.push(value)
			}
		}
	}

	return primes
}
