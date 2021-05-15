/**
 * 1004. Max Consecutive Ones III
Medium

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let count = 0;
  let s = 0,
    e = 0;
  const len = nums.length;

  for (; e < len; e++) {
    let dist = e - s + 1;
    count += nums[e];
    if (dist - count > k) {
      while (nums[s] === 1) {
        dist--;
        count -= nums[s];
        s++;
      }
      dist--;
      count -= nums[s];
      s++;
    }
    if (dist > max) max = dist;
  }
  return max;
};
