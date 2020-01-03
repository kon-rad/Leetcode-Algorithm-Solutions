/**
 * 45. Jump Game II
Hard

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length < 2) return 0;
  let begin = 1;
  let end = nums[0];
  let max = nums[0];
  let count = 1;

  while (max + 1 < nums.length) {
      let n = begin;
      let m = end + 1;
      begin = end + 1;
      for (let i = n; i < m; i++) {
          if (i + nums[i] > max) {
              max = nums[i] + i;
              end = max;
          }
      }
      count++;
  }
  return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length;
  if (len < 2) return 0;
  let max = 0, end = 0, count = 0;
  for (let i = 0; i < len - 1; i++) {
      max = Math.max(max, i + nums[i]);
      if (max >= len - 1) return count + 1;
      if (i === end) {
          count++;
          end = max;
      }
  }
  return count;
};


