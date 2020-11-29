/**
 * 628. Maximum Product of Three Numbers
Easy


Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 */

/**
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max1) {
          max3 = max2;
          max2 = max1;
          max1 = nums[i];
      } else if (nums[i] > max2) {
          max3 = max2;
          max2 = nums[i];
      } else if (nums[i] > max3) {
          max3 = nums[i];
      }
      if (nums[i] < min1) {
          min2 = min1;
          min1 = nums[i];
      } else if (nums[i] < min2) {
          min2 = nums[i];
      }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
