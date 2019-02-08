/**
 * 
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

/**
 * Solution modeled after other leetcoder
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let r = nums[0];
  for (let i = 1, min = r, max = r; i < nums.length; i++) {
      // if current num is negative, swap min/max
      if (nums[i] < 0) {
          let t = min;
          min = max;
          max = t;
      }
      
      // max/min is either current number or product of previous min/max and current num
      max = Math.max(nums[i], max * nums[i]);
      min = Math.min(nums[i], min * nums[i]);

      // max is potential result
      r = Math.max(r, max);
  }

  return r;
};

/**
 * Original solution
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const len = nums.length;
  let cur;
  if (nums.length === 1) {
      return nums[0];
  }
  if (nums.length === 2) {
      let prod = nums[0] * nums[1];
      if (prod > nums[0] && prod > nums[1]) return prod;
      if (nums[0] > prod && nums[0] > nums[1]) return nums[0];
      if (nums[1] > prod && nums[1] > nums[0]) return nums[1];
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
      cur = nums[i];
      if (cur > max) {
          max = cur;
      }
      for (let j = i+1; j  < len; j++) {
          cur *= nums[j];
          if (cur > max) {
              max = cur;
          }
      }
  }
  return max === -0 ? 0 : max;
};