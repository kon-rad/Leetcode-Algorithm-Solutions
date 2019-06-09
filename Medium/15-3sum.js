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
  let len = nums.length, sum;
  let res = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i<len-2; i++) {
    while (nums[i] === nums[i+1]) i++;
    if (nums[i] > 0) break;
    let cur = nums[i];
    if (cur === nums[i+1]) continue;
    let l = i+1;
    let r = len-1;
    while (l < r) {
      sum = nums[l] + nums[r] + cur;
      if (sum === 0) {
        res.push([cur, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l+1] && l < r) l++;
        while (nums[r] === nums[r+1] && l < r) r--;
      } else if (sum < 0) {
        l++;
        while (nums[l] === nums[l+1] && l < r)  l++;
      } else {
        r--;
        while (nums[r] === nums[r+1] && l < r) r--;
      }
    }
  }
  return res;
};
let arr = [-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6];
let arr2 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));