/**
 * 136. Single Number
Easy

4267

157

Add to List

Share
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const s = {};
  let a = null;
  nums.forEach(c => s.hasOwnProperty(c) ? s[c]++ : s[c] = 1);
  for (let c in s) {
      if (s[c] === 1) {
          a = c;
          break;
      }
  }
  return a;
};

