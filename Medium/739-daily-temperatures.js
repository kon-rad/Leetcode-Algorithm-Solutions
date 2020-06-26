/**
 * 739. Daily Temperatures
Medium

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length;
  let max = { val: 0, i: 0 };
  const result = [];
  for (let i = len - 1; i >= 0; i--) {
      if (T[i] >= max.val) {
          max.val = T[i];
          max.i = i;
          result[i] = 0;
      } else {
          for (let j = i + 1; j <= max.i; j++) {
              if (T[j] > T[i]) {
                  result[i] = j - i;
                  break;
              }
          }
      }
  }
  return result;
};