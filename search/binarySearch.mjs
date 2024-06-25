/**
 * One of the most common searching Algorithms, if you are searching text, probably you should emulate
 * some kind of indexing, since this Algorithm usally operates by comparing values using a pivot value, and that's a number!
 */

/**
 * For simplicity reasons, let's start with numbers only. The principle should apply to indexed strings too!
 * @param {number} n
 * @param {Array.<number>} data
 */

export function searchNumber(n, data) {
	// Sort the numbers, this algorithm requires sorted values!
	const sortedData = data.sort((a,b) => a - b)
	/**
	 * Desktop test:izz
	 *
	 * 1. Let's say we have the following data: [1,2,3,4,5,6,7,8,9,10]
	 * 2. Search n = 4
	 * 3. Choose a pivot, let's say the half of the array
	 * 4. If n <= pivot and n != pivot, n should be on the left hand, otherwise check the right hand side.
	 */

	if (sortedData.length <= 1 && sortedData[0] !== n) {
		return -1 // Meaning, the number is not here!
	}

	const pivot = Math.floor(sortedData.length / 2)
	const pivotValue = sortedData[pivot]

	if (pivotValue === n) {
		return pivot
	}

	// Search left hand
	if (n < pivot) {
		const left = sortedData.slice(0, pivot)
		for (let index = 0; index < left.length; index++) {
			if (left[index] === n) {
				return index
			}
		}
	} else {
		// Search right hand
		const right = sortedData.slice(pivot - 1)
		for (let index = 0; index < right.length; index++) {
			if (right[index] === n) {
				return index + pivot - 1
			}
		}
	}
}

/**
 * This a small optimization from the previous version as an alternative of copying the Array via Slice.
 * @param {number} n
 * @param {Array.<number>} data
 */
export function searchNumberV2(n, data) {
	const sortedData = data.sort((a, b) => a - b)
	const pivot = Math.floor(sortedData.length / 2)
	const pivotValue = sortedData[pivot]

	/**
	 * Desktop test:
	 *
	 * 1. Let's say we have the following data: [1,2,3,4,5,6,7,8,9,10]
	 * 2. Search n = 4
	 * 3. Choose a pivot, let's say the half of the array
	 * 4. If n <= pivot and n != pivot, n should be on the left hand, otherwise check the right hand side.
	 * We define a cursor to move around the half of the Array only.
	 * If n < pivot, move around the left of the Array until pivot, otherwise if n > pivot, move around the right of the array until
	 * data.length
	 */

	if (pivotValue === n) {
		return pivot
	}

	if (n < pivot) {
		for (let index = 0; index < pivot; index++) {
			if (sortedData[index] === n) {
				return index
			}
		}
	} else if (n > pivot) {
		const dataLen = sortedData.length - 1
		for (let index = dataLen; index >= pivot; index--) {
			if (sortedData[index] === n) {
				return index
			}
		}
	}
}
