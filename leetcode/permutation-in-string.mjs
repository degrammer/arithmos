/**
 * Exercise: https://leetcode.com/problems/permutation-in-string/description/
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
 */

/**
 *
 * @param {string} w
 * @param {Array.string} permutations
 *
 * @returns {Array.<string>}
 */
export function getPermutations(str) {
	const results = []

	if (str.length === 1) {
		results.push(str)
		return results
	}

	for (let i = 0; i < str.length; i++) {
		const firstChar = str[i]
		const charsLeft = [...str].filter((_, index) => index !== i).join("")
		const innerPermutations = getPermutations(charsLeft)
		for (let j = 0; j < innerPermutations.length; j++) {
			results.push(`${firstChar}${innerPermutations[j]}`)
		}
	}

	return results
}

export function containPermutation(s1, s2) {
	if (s1.length <= 0) {
		return false
	}
	if (s2.length >= 104) {
		return false
	}
	const permutations = getPermutations(s1)
	return permutations.some((w) => s2.indexOf(w) !== -1)
}
