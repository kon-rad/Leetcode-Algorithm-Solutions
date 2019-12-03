/**
 * 39. Combination Sum
Medium
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  search(0, [], candidates, target, res);
  return res;
};

const search = (i, sub, cand, tar, res) => {
  if (tar === 0) return res.push(sub.slice());
  if (i >= cand.length) return;
  if (tar < 0) return;

  sub.push(cand[i]);
  search(i, sub, cand, tar - cand[i], res);
  sub.pop();
  search(i + 1, sub, cand, tar, res);
}

/**
 * alternative solution
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  const cand = candidates.sort((a, b) => a - b);
  
  find(cand, res, target, [], 0);
  return res;
};

const find = (cand, res, t, cur, i) => {
  if (t === 0) return res.push(cur);
  else if (t < 0 || i > cand.length) return;
  
  while (i < cand.length && t > 0) {
      find(cand, res, t - cand[i], [...cur, cand[i]], i);
      i++;
  }
}


const c = [2,3,5], t = 8;
console.log(combinationSum(c, t));
