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
 * Dynamic programming
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function (s, p) {
  let pLen = p.length;
  let sLen = s.length;

  const subArr = new Array(sLen + 1).fill(0);
  const cache = subArr.map(() => new Array(pLen + 1).fill(0));

  const match = function (iS, iP) {
    if (iS === sLen && iP === pLen) return true;
    if ((iS === sLen && p[iP + 1] !== '*') || iP === pLen) return false;
    if (cache[iS][iP] !== 0) return cache[iS][iP] === 1;

    let isMatching = false;
    let current = p[iP],
      next = p[iP + 1];
    if (current === '.' || current === s[iS]) {
      if (iS === sLen) {
        if (next === '*') {
          isMatching = match(iS, iP + 2);
        } else {
          isMatching = false;
        }
      } else {
        if (next === '*') {
          isMatching =
            match(iS + 1, iP) || match(iS + 1, iP + 2) || match(iS, iP + 2);
        } else {
          isMatching = match(iS + 1, iP + 1);
        }
      }
    } else {
      if (next === '*') {
        isMatching = match(iS, iP + 2);
      }
    }
    cache[iS][iP] = isMatching ? 1 : -1;

    return isMatching;
  };

  return match(0, 0);
};

/**
 * Dynamic Programming
 * @param {*} s
 * @param {*} p
 * @returns
 */
var isMatch = function (s, p) {
  let dp = [[true]];
  for (let i = 1; i < p.length + 1; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 2];
    } else {
      dp[0][i] = false;
    }
  }
  for (let i = 1; i < s.length + 1; i++) {
    dp.push([]);
    dp[i][0] = false;
    for (let j = 1; j < p.length + 1; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
          dp[i][j] =
            dp[i][j - 2] === true ||
            dp[i][j - 1] === true ||
            dp[i - 1][j] === true;
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }
  console.log(dp);
  return dp[s.length][p.length];
};

let s = 'aab',
  p = 'c*a*b';
console.log(isMatch(s, p));
