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
 * first create dictionary of all characters in s string
 * then iterate over chars in t string, subtracting occurances from dict
 * if at the end some do not equal zero, it is not anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const dict = {};
  s.split('').forEach(c => {
      if (dict.hasOwnProperty(c)) {
          dict[c]++;
      } else {
          dict[c] = 1;
      }
  });
  t = t.split('');
  for (let i = 0, l = t.length; i<l; i++) {
      if (dict.hasOwnProperty(t[i]) && dict[t[i]] >= 0) {
          dict[t[i]]--;
      } else {
          return false;
      }
  }
  for (c in dict) {
      if (dict.hasOwnProperty(c)) {
          if (dict[c] !== 0) {
              return false;
          }
      }
  }
  return true;
};