/**
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 Example:

 Input: [-2,1,-3,4,-1,2,1,-5,4],
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 Follow up:

 If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  let max = -Number.MAX_SAFE_INTEGER;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur = cur + nums[i];
    if (max < cur) {
      max = cur;
    }
    if (cur < 0) {
      cur = 0;
    }
  }

  return max;
};

/**
 * Algorithm discussed by Jon Bentley (Sep. 1984 Vol. 27 No. 9 Communications of the ACM P885)
 *
 * At each item in the array you either start a new count of max sum, or continue adding
 * to the existing sum, which ever option is greater at the time.
 *
 * You either decide to continue adding to the sum, using the sub array, or you start new.
 * It depends on what is the greater value, either taking the current number and adding it
 * to the existing sub array, or the current number itself alone.
 *
 * You keep track of the overall maximum sub array sum seen so far in another variable.
 *
 * This will always work because you are identifying the two constraints and saving them in
 * variables. They are first: the maximum sub array sum that is ending in the current
 * position, and the maximum sum overall.
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  }
  return maxSoFar;
};
