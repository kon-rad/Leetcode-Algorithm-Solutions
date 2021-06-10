/**
 * 224. Basic Calculator
Hard

2309

207

Add to List

Share
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
Example 4:

Input: s = "+48 + -48"
Output: 0
Explanation: Numbers can have multiple digits and start with +/-.
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
Every number and running calculation will fit in a signed 32-bit integer.
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sum = 0;
  let sign = 1;
  let i = 0;
  const len = s.length;
  while (i < len) {
    // if ' ' - then skip at the bottom
    if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '+') {
      sign = 1;
    } else if (/[0-9]/.test(s[i])) {
      let numStr = s[i];
      i++;
      while (/[0-9]/.test(s[i])) {
        numStr += s[i];
        i++;
      }
      i--;
      sum += sign * parseInt(numStr);
    } else if (s[i] === '(') {
      let j = i + 1;
      let openParen = 1;
      while (openParen > 0) {
        if (s[j] === '(') {
          openParen++;
        } else if (s[j] === ')') {
          openParen--;
        }
        j++;
      }
      j--;
      let numRes = calculate(s.substring(i + 1, j));
      sum += sign * numRes;
      i = j;
    }
    i++;
  }
  return sum;
};
