/**

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

 */

/**
 * This algorithm sets boundaries with their lenghts in a hash map
 * The lengths are updated with each new item
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const dict = {};
  let longest = 0, sum, left, right;
  for(let i = 0; i < nums.length; i++) {
      if (dict.hasOwnProperty(nums[i])) {
          // duplicates
          continue;
      }
      left = dict.hasOwnProperty(nums[i] - 1) ? dict[nums[i] - 1] : 0;
      right = dict.hasOwnProperty(nums[i] + 1) ? dict[nums[i] + 1] : 0;
      sum = left + right + 1;
      dict[nums[i]] = sum;
      longest = sum > longest ? sum : longest;
      // update other edges of left and right segments
      // if they don't exist, it doesn't matter, dict[n] is updated again
      dict[nums[i] - left] = sum;
      dict[nums[i] + right] = sum;
  }
  return longest;
};