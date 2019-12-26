/**
41. First Missing Positive
Hard

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.

 * 
 */

/**
 * O(n) Time 0(n) Space
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const dict = {};
  nums.forEach(n => dict[n] = true);
  let i = 1
  for (i; i < nums.length + 1; i++) {
      if (!dict.hasOwnProperty(i)) {
          break;
      }
  }
  return i;
};