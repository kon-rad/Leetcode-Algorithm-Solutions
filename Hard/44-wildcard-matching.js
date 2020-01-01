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
  const map = new Map();
  return recursive(s, p, 0, 0, map);
};
const recursive = (s, p, i, j, map) => {
  const pLen = p.length;
  const sLen = s.length;
  if (i === sLen || j === pLen) {
      if (i === sLen && j === pLen) {
          return true;
      }
      if (j < pLen) {
          while (j < pLen && p.charAt(j) === '*') {
              j++;
          }
          if (j === pLen) {
              return true;
          }
      }
      return false;
  }
  const key = `${i}:${j}`;
  if (!map.has(key)) {
      if (p.charAt(j) === '*') {
          map.set(
              key,
              recursive(s, p, i + 1, j, map)
              || recursive(s, p, i, j + 1, map)
          );
      } else if (p.charAt(j) === '?' || p.charAt(j) === s.charAt(i)) {
          map.set(key, recursive(s, p, i + 1, j + 1, map));
      } else {
          return false;
      }
  }
  return map.get(key);
}

let s = "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
p = "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb";
console.log(isMatch(s, p));
// todo: implement this solution: https://leetcode.com/problems/wildcard-matching/discuss/422322/fastest-javascript-solution-with-constant-space
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

