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
  const res = [];
  const len = nums.length;
  let sum, cur;
  const map = {};
  for (let i = 0; i< len; i++) {
      for (let j = 0; j < len; j++) {
          sum = nums[i] + nums[j];
          if (nums[i] > nums[j]) {
              cur = [nums[j], nums[i]];
          } else {
              cur = [nums[i], nums[j]];
          }
          if (map.hasOwnProperty(sum)) {
              map[sum].push(cur);
          } else {
              map[sum] = [cur];
          }
      }
  }
  console.log(map);
  Object.keys(map).forEach(key => {
      let pair = target - key;
      if (map.hasOwnProperty(pair)) {
          console.log('match');
          map[key].forEach(p1 => {
              map[pair].forEach(p2 => {
                  res.push([...p1, ...p2]);
              })
          })
      }
  })
  return res;
};
let nums = [1, 0, -1, 0, -2, 2], target = 0;

fourSum(nums, target);
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]