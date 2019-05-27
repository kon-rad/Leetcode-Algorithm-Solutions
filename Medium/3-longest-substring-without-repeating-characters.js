/**
3. Longest Substring Without Repeating Characters
Medium

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const l = s.length;
  if (l === 0 || l === 1) {
      return l;
  }
  let longest = 1, c, index;
  let curr = s.charAt(0);
  for (let e = 1; e < l; e++) {
      c = s.charAt(e);
      index = curr.indexOf(c);
      if (index === -1) {
          curr += c;
          if (longest < curr.length) longest = curr.length;
          continue;
      }
      curr = curr.substring(index + 1);
      curr += c;
  }
  return longest;
};