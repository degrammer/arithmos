/**
 * String compression algorithms
 */

/**
 * Basic compression: Giving the following string: "Hello world"
 * Create the compressed version: ["H", 1, "e", 1, "l",:3, "o", 2, "r", 1, "d", 1]
 * As you can see, it creates an Array with the number of ocurrences of each letter.
 */

/**
 *
 * @param {string} words
 */
export function compressWords(words) {
	/**
	 *  Desktop test
	 *
	 * Assumption: All characters are valid words, they are considered strings.
	 *
	 * 1. Let's remove the whitespace, since we don't need it for this exercise
	 * "Hello world" -> "Helloworld"
	 * "Hello world  " -> "Hello world"
	 * 2. Iterate each letter, store it to keep track of the ocurrences, the first time the occurrence value will be 1.
	 * You can use a Map, since they are key-pairs
	 * 3. Return the map formatted as an array.
	 */

	const wordsWithoutSpaces = words.replace(/\s+/g, "")
	const wordMap = new Map()

	for (const w of wordsWithoutSpaces) {
		if (wordMap.has(w)) {
			wordMap.set(w, wordMap.get(w) + 1)
		} else {
			wordMap.set(w, 1)
		}
	}

	return Array.from(wordMap).flat()
}
