/**
18. 4Sum
Medium

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
  const res = [];
  if (nums === null || len < 4) return res;
  let sum, cur;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len-3; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;
      for (let j = i+1; j < len - 2; j++) {
          if (j > i+1 && nums[j] === nums[j-1]) continue;
          
          let k = j + 1;
          let m = len - 1;
          while (k < m) {
              sum = nums[i] + nums[j] + nums[k] + nums[m];
              if (target === sum) {
                  res.push([nums[i], nums[j], nums[k], nums[m]]);
                  while (nums[k+1] === nums[k] && k < m) k++;
                  while (nums[m-1] === nums[m] && k < m) m--;
                  k++;
                  m--;
              } else if (sum < target) {
                  k++;
              } else {
                  m--;
              }
          }
      }
  }
  return res;
};