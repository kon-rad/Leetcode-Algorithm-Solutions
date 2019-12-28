/**
 * 43. Multiply Strings
Medium

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * O(m * n) Time Complexity where m and n are length of the two number parameters
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '' || num1 === '0' || num2 === '' || num2 === '0') {
      return '0';
  }
  const p = new Array(num1.length + num2.length).fill(0);
  let posEnd = p.length - 1;
  for (let i = num1.length - 1; i >= 0; i--) {
      let pos = posEnd;
      for (let j = num2.length - 1; j >= 0; j--) {
          p[pos] += Number(num1.charAt(i)) * Number(num2.charAt(j));
          p[pos - 1] += Math.floor(p[pos] / 10);
          p[pos] %= 10;
          pos--;
      }
      posEnd--;
  }
  return p.join('').replace(/^0+/,'');
};