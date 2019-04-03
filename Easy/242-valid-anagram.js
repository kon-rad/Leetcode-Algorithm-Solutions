// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * Hash map solution, O(m+n) time
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sStore = {};
  const tStore = {};
  const sLen = s.length;
  const tLen = t.length;
  if (sLen !== tLen) {
      return false;
  }
  
  for (let i = 0; i < sLen; i++) {
      sStore[s[i]] = sStore[s[i]] + 1 || 1;
      tStore[t[i]] = tStore[t[i]] + 1 || 1;
  }
  for (let key in sStore) {
      if (sStore[key] !== tStore[key]) {
          return false;
      }
  }
  return true;
};