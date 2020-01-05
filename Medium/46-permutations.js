/**
 * 46. Permutations
Medium

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let len = nums.length;
  const result = [];
  return recursive(nums, len, result);
};

const recursive = (nums, i, result) => {
  if (i === 1) {
      result.push(nums.slice());
      return result;
  }
  for (let j = 0; j < i; j++) {
      result = recursive(nums, i - 1, result);
      if (i % 2 === 1) {
          swap(nums, 0, i - 1);
      } else {
          swap(nums, j, i - 1);
      }
  }
  return result;
}

const swap = (nums, a, b) => {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
const arr = [1,2,3];
console.log(permuteUnique(arr));