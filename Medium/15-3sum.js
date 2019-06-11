/**
 15. 3Sum
 Medium

 Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

 Note:

 The solution set must not contain duplicate triplets.

 Example:

 Given array nums = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 */

'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length, sum, cur, l, r;
  let res = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i<len-2; i++) {
    while (nums[i] === nums[i-1]) i++;
    if (nums[i] > 0) break;
    cur = nums[i];
    l = i+1;
    r = len-1;
    while (l < r) {
      sum = nums[l] + nums[r] + cur;
      if (sum === 0) {
        res.push([cur, nums[l], nums[r]]);
        while (nums[l] === nums[l+1] && l < r) l++;
        while (nums[r] === nums[r+1] && l < r) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};