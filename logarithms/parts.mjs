/**
 * Objective:
 * Learn to identify and calculate the two parts of the logarithm
 * (any base, represented as Log) of a number:
 *
 *  Mantissa and Characteristic.
 *
 * The Mantissa represents the number at the right part of the decimal point.
 * The Characteristic represents the number at the left part of the decimal point.
 *
 *  Asume here Log(n) is base 10.
 *
 *  Example:
 * Log(500) = Log(10^2*5) = Log(10^2)     +     Log(5)
 *
 *                               ^                ^
 *                        (Characteristic)      (Mantissa)
 *
 * Let's breakdown the algoritm in order to calculate such values
 *
 * Log(n) = Log(10^x * y)
 *
 * 1. Find the Power (x) to raise the number 10 (We're assuming base 10 here)
 * 2. Find a number (y) to add to the result from the previous step that's equals to n.
 * 3. Split the values using the decimal point
 * 4. Return the Mantissa (right value of the point) and Characteristic (left value of the point)
 * 5. Write several test cases to ensure the value is correct by calculating:
 *   Log(n) = Log(10^x) + Log(y)
 * 6. Calculate the growth rate (runtime complexity) using Big O notation.
 * 7. Optional: Identify if is possible to optimize the algorithm
 *
 * Hint: How to calculate y
 *
 * n = 10^x * y
 *
 * y = 10^x / n
 *
 */

export function calculatePower(n, power) {
	if (n <= 0) {
		return Number.NaN
	}

	const powerCheck = 10 ** power

	/**
	 * Desk checking:
	 * n = 500
	 * power = 1
	 *
	 * Expected result should be equal or lower than n
	 * 10^1 = 10
	 * 10 <= 500: yes
	 * 10^2 = 100
	 * 100 <= 500: yes
	 * 100^3 = 1000
	 * 1000 <= 500: no, then use previous power (2) 10^2
	 *
	 * Calculate remaining:
	 * 10^2*r = n
	 * r = n/10^2
	 *
	 */

	if (powerCheck <= n) {
		return calculatePower(n, power + 1)
	}

	return power - 1
}

export function calculateRemaining(n, power) {
	return n / 10 ** power
}

export function printCalculation(n) {
	const power = calculatePower(n, 1)
	if (Number.isNaN(power)) {
		return "Cannot calculate formula for this value for base 10"
	}
	const remaining = calculateRemaining(n, power)
	return `Log(${n}) = Log(10^${power}*${remaining})`
}

export function calculateMantisseAndCharacteristic(n) {
	const power = calculatePower(n, 1)
	if (Number.isNaN(power)) {
		return "Cannot calculate formula for this value for base 10"
	}
	const remaining = calculateRemaining(n, power)
	const characteristic = Math.log10(10 ** power)
	const mantisse = Math.log10(remaining)
	return {
		characteristic,
		mantisse,
		result: characteristic + mantisse,
	}
}
