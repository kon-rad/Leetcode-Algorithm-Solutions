/**
 * 77. Combinations
Medium

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const output = [];
  let i = 0;
  const combineRec = (comb, start) => {
      if (comb.length === k) {
          output.push(comb)
      }
      for (let i = start; i <= n; i++) {
          combineRec(comb.concat(i), i + 1);
      }
  }
  combineRec([], 1);
  return output;
};

/**
 * Stack solution
 * @param {*} temperatures 
 */
var dailyTemperatures = function(temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];
  for (let i = 0; i < len; i++) {
      while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
          const j = stack.pop();
          res[j] = i - j;
      }
      stack.push(i);
  }
  return res;
};