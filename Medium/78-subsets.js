/**
 * 78. Subsets
Medium

Share
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]];
  for (let i = 0, len = nums.length; i < len; i++) {
    res.forEach(a => {
      res.push([...a, nums[i]]);
    })
  }
  return res;
};

/**
 * Recursive back tracking
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  backtrack(nums, res, [], 0);
  return res;
};

const backtrack = (nums, res, temp, start) => {
 res.push([...temp]);
 for (let i = start, len = nums.length; i < len; i++) {
   temp.push(nums[i]);
   backtrack(nums, res, [...temp], i + 1);
   temp.pop();
 }
}