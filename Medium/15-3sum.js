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
  const cache = {};
  let len = nums.length, cur, joined, sum;
  let res = [];
  for (let i = 0; i<len-2; i++) {
    for (let j = i+1; j<len-1; j++) {
      // if (j === i) {
      //   continue;
      // }
      if (nums[i] > nums[j]) {
        cur = [nums[j], nums[i]];
      } else {
        cur = [nums[i], nums[j]];
      }
      let original = cur.slice();

      for (let k = j+1; k<len; k++) {
        // if (k === j || k === i) {
        //   continue;
        // }
        cur = original.slice();
        let kn = nums[k];
        let m = 0;
        sum = 0;
        while (m<2 && kn > cur[m]) {
          sum += cur[m];
          m++;
        }
        cur.splice(m, 0, kn);
        while (m<3) {
          sum += cur[m];
          m++;
        }
        joined = cur.join('_');
        if (cache.hasOwnProperty(joined)) {
          continue;
        }
        cache[joined] = true;
        if (sum === 0) {
          res.push(cur);
        }
      }
    }
  }
  return res;
};
let arr = [-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6];
let arr2 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));