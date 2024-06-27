/**
 * Factorial: is the product of all positive integers less than or equal to n.
 *
 * So:
 *
 * 0! = 1
 * 1! = 1
 * 2! = 2x1
 * 3! = 3x2x1
 */

/**
 *
 * @param {number} n
 */
export function factorial(n) {
	if (n < 0) {
		throw new Error("Invalid value for n")
	}

	if (n <= 0) {
		return 1
	}

	let result = n

	for (let i = 1; i < n; i++) {
		result = result * (n - i)
	}

	return result
}

export function factorialRecursive(n) {
	if (n <= 1) {
		return 1
	}

	return n * factorialRecursive(n - 1)
}
