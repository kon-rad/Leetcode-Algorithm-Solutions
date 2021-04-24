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
var permuteUnique = function (nums) {
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
};

const swap = (nums, a, b) => {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};
const arr = [1, 2, 3];
console.log(permuteUnique(arr));

/** ELEGANT SOLUTION  */
/**
 * Space O(n!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let len = nums.length;
  if (len === 0) return [];
  let ans = [[nums[0]]];
  for (let i = 1; i < len; i++) {
    let newAns = [];
    ans.forEach((el) => {
      for (let j = 0; j <= i; j++) {
        const newEl = el.slice();
        newEl.splice(j, 0, nums[i]);
        newAns.push(newEl);
      }
    });
    ans = newAns.slice();
  }
  return ans;
};

/** BACKTRACKING SOLUTION  */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  backtrack(nums, res, 0);
  return res;
};

const backtrack = (nums, res, n) => {
  if (n === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }
  for (let i = n; i < nums.length; i++) {
    [nums[i], nums[n]] = [nums[n], nums[i]];
    backtrack(nums, res, n + 1);
    [nums[i], nums[n]] = [nums[n], nums[i]];
  }
};

/**
 * Most common solution
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const out = [];
  const pre = [];
  recPerm(nums, pre, out);
  return out;
};

const recPerm = (nums, pre, out) => {
  if (nums.length === 0) {
    out.push([...pre]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    const newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
    recPerm(newNums, [...pre, nums[i]], out);
  }
};
