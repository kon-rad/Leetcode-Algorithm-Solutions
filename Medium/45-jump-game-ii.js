/**
 * 45. Jump Game II
Medium

5147

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxJump = 0;
  let currEnd = 0;
  let jumpCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxJump = Math.max(maxJump, i + nums[i]);
    if (currEnd === i) {
      jumpCount++;
      currEnd = maxJump;
    }
  }
  return jumpCount;
};
