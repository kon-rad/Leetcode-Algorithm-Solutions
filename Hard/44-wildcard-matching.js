/**
 * 44. Wildcard Matching
Hard

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const pLen = p.length;
  const sLen = s.length;
  let j = 0;
  let i = 0;
  for (i; i < pLen; i++) {
      let pChar = p.charAt(i);
      if (pChar === '*') {
          if (isMatch(s.substring(j), p.substring(i + 1))) {
              return true;
          }
          while (j < sLen) {
              j++;
              if (
                  isMatch(s.substring(j), p.substring(i))
              ) {
                  return true;
              }
          }
      } else if (pChar === '?') {
          j++;
      } else {
          if (pChar !== s.charAt(j)) {
              return false;
          } else {
              j++;
          }
      }
      if (j > sLen) return false;
  }
  return j === sLen && i === pLen;
};

let s = "babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab",
p = "***bba**a*bbba**aab**b";
console.log(isMatch(s, p));
// "babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab"
// "***bba**a*bbba**aab**b"
// "b"
// "*?*?*"
// Output
// true
// Expected
// false
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
// Example 5:

// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false