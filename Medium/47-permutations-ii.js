/**
 * 47. Permutations II
Medium

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let len = nums.length;
  if (len === 0) return [];
  let ans = [[nums[0]]];
  for (let i = 1; i < len; i++) {
      let newAns = [];
      ans.forEach(el => {
          for (let j = 0; j <= i; j++) {
              const newEl = el.slice();
              newEl.splice(j, 0, nums[i]);
              newAns.push(newEl);
              if (el[j] === nums[i]) break;
          }
      });
      ans = newAns.slice();
  }
  return ans;
};

const arr = [1,1,2];
console.log(permuteUnique(arr));
