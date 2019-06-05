/**
10. Regular Expression Matching
Hard

2631

513

Favorite

Share
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

 */

 /**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let j = 0;
  let pLen = p.length;
  let sLen = s.length;
  for (let i = 0; i < sLen; i++) {
      console.log(j, i, s[i], p[j]);
      if (j < pLen && (s[i] === p[j] || p[j] === '.')) {
          j++;
      } else if (j < pLen && p[j] === '*') {
          if (s[i] !== s[i-1]) {
              i--;
              j++;
          }
      } else if (j < pLen-1 && p[j+1] === '*') {
          j+=2;
      } else {
          return false;
      }
  }
  return (j === pLen || (j === pLen - 1 && p[j] === '*'));
};



 /**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return (new RegExp('^' + p + '$').test(s));
};