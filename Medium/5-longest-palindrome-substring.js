/**
5. Longest Palindromic Substring
Medium

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
          let cs = s.slice(i, j+1);
          if (isPalindrome(cs)) {
              if (cs.length > longest.length) {
                  longest = cs;
              }
          }
      }
  }
  return longest;
};
const isPalindrome = function(s) {
  return s === s.split('').reverse().join('');
}