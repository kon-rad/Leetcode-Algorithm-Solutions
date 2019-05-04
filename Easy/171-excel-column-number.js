/**
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let col = 0, j = 0;
  for (let i = s.length - 1; i >= 0; i--, j++) {
      col += (s.charCodeAt(i) - 64) * Math.pow(26, j);
  }
  return col;
};