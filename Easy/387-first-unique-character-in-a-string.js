/**
 * 387. First Unique Character in a String
Easy

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const dict = {};
  const sArr = s.split('');
  sArr.forEach(c => {
      if (dict.hasOwnProperty(c)) {
          dict[c]++;
      } else {
          dict[c] = 1;
      }
  });
  let ans = -1;
  for (let i = 0; i < sArr.length; i++) {
      if (dict[sArr[i]] === 1) {
          ans = i;
          break;
      }
  };
  return ans;
};