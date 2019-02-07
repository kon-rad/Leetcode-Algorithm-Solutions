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
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const len = nums.length;
  let cur;
  let curArr;
  if (nums.length === 1) {
      return nums[0];
  }
  if (nums.length === 2) {
      let prod = nums[0] * nums[1];
      if (prod > nums[0] && prod > nums[1]) return prod;
      if (nums[0] > prod && nums[0] > nums[1]) return nums[0];
      if (nums[1] > prod && nums[1] > nums[0]) return nums[1];
  }

  const max = { num: Number.MIN_SAFE_INTEGER, arr: [] };
  for (let i = 0; i < len; i++) {
      cur = nums[i];
      curArr = [nums[i]].slice();
      if (cur > max.num) {
          max.num = cur;
          max.arr = curArr.slice();
      }
      for (let j = i+1; j  < len; j++) {
          cur *= nums[j];
          curArr.push(nums[j]);
          if (cur > max.num) {
              max.num = cur;
              max.arr = curArr.slice();
          }
          console.log(max, cur, curArr);
      }
  }
  return max.num === -0 ? 0 : max.num;
};
