export default function LongestPalindromeSubstring(s: string): string {
	let start = 0;
	let maxLength = 1;

	function findLongestPalindrome(left: number, right: number, source: string) {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			let currPal = right - left + 1;
			if (currPal > maxLength) {
				maxLength = currPal;
				start = left;
			}
			left--;
			right++;
		}
	}

	for (let i = 0; i < s.length; i++) {
		// เพราะ palindrome สามารถ ติดกันได(cc) หรือ ติดกันได้แต่มีอักษรตรงกลางเช่น (aba)
		findLongestPalindrome(i - 1, i + 1, "source1"); // palindrome มีตรงกลาง 1 ตัว
		findLongestPalindrome(i, i + 1, "source2"); // palindrome มีตรงกลาง 2 ตัว
	}

	return s.slice(start, start + maxLength);
}
