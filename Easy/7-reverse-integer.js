/**
7. Reverse Integer
Easy

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Accepted
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let numStr = ""+x;
  let result = '';
  let sign = x < 0 ? -1 : 1;
  numStr.split('').forEach(c => {
      result = c + result;
  });
  return parseInt(result) > Math.pow(2, 31) ? 0 : parseInt(result) * sign;
};