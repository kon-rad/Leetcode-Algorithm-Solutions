/**
 * 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

 /**
  * O(n) time - one pass, keep one counter for non zero number position
  * the second counter is normal incrementor
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0, l = nums.length, pos = 0; i<l; i++) {
      if (nums[i] !== 0) {
          if (i !== pos) {
              nums[pos] = nums[i];
              nums[i] = 0;
          }
          pos++;
      }
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let z = 0;
  for (let i = 0, l = nums.length; i<l-z; i++) {
      if (nums[i] === 0) {
          z++;
          nums.splice(i, 1);
          nums.push(0);
          i--;
      }
  }
  return nums;
};