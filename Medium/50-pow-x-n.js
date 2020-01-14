/**
 * 50. Pow(x, n)
Medium

Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let r = 1, i = 0;
  let neg = false;
  if (n < 0) {
      neg = true;
      n *= -1;
  }
  while (i < n) {
      r *= x;
      i++;
  }
  return neg ? 1 / r : r;
};

// const x = 2.00000, n = 10;
const x = -2.00000, n = 3;
// const x = 2.10000, n = 3;
// const x = -3, n = 9;

// 2.00000
// -2147483648
console.log(myPow(x, n));