/**
 * 
 * 202. Happy Number
Easy

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */




/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set();
  return recursive(n, seen);
};

/**
 * 
 * @param {*} n 
 * @param {*} seen 
 */
const recursive = (n, seen) => {
  let arr = (n+'').split('');
  const total = arr.reduce((total, cur) => {
      let num = parseInt(cur);
      let square = num * num;
      return total + square;
  }, 0);
  if (total === 1) {
      return true;
  }
  if (seen.has(total)) {
      return false;
  }
  seen.add(total);
  return recursive(total, seen);
}