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
 * This is a DP algorithm
 * It creates a matrix of start and end indices with boolean if its a palindrome
 * first it sets all substrings of length 1 as true
 * second, it checks for any substrings of length 2 that are palindrome
 * next it checks for substrings of 3 or greater lengths
 * the dynamic programming part is here, it checks if substring of
 * the previous length was a palindrome, therefore not having
 * to recalculate the previous sub string status
 *
 * Time: On log n
 * Space: On
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = 1;
  const len = s.length;
  const table = new Array(len).fill().map(() => new Array(len).fill(0));
  // mark all single characters as palindrome === true
  for (let i = 0; i < len; i++) {
    table[i][i] = 1;
  }
  // check for substrings of length 2
  let start = 0;
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = 1;
      start = i;
      longest = 2;
    }
  }

  // check for lengths greater than 2
  for (let k = 3; k <= len; k++) {
    // fix the starting index
    for (let i = 0; i < len - k + 1; i++) {
      // get the ending index of substring from
      // starting index and length k
      let j = i + k - 1;
      // 1. check if the 'inner' smaller substring is a palindrome
      // 2. check if i and j chars are equal
      // if yes, it is a palindrome
      if (table[i + 1][j - 1] && s[i] === s[j]) {
        table[i][j] = 1;
        if (k > longest) {
          start = i;
          longest = k;
        }
      }
    }
  }

  console.log(table);
  return s.slice(start, start + longest);
};

/**
 * This is a brute force, inefficient way. It checks all substrings.
 * This is an exponentially growing time, as the string
 * length increases.
 *
 * Time: On^3
 * Space: On
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let cs = s.slice(i, j + 1);
      if (isPalindrome(cs)) {
        if (cs.length > longest.length) {
          longest = cs;
        }
      }
    }
  }
  return longest;
};
const isPalindrome = function (s) {
  return s === s.split('').reverse().join('');
};

const s = 'babad';

console.log(longestPalindrome(s));
