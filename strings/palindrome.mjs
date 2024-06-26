/**
 * Palindrome: a word, phrase, or sequence that reads the same backwards as forwards.
 * The following Algorithm allows to detect if a words is Palindrome.
 */

/**
 *
 * @param {string} word
 */
export function isPalindrome(word) {
	const original = [...word.toLowerCase()]
	return [...original].reverse().every((l, index) => original[index] === l)
}
