/**
 * Given two binary strings, return their sum (also a binary string).

 The input strings are both non-empty and contains only characters 1 or 0.

 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  // Time complexity: O(n + m) n = first string, m = second string
  // Space complexity: O(n)
  let i = a.length - 1,
    j = b.length - 1,
    s = 0,
    result = '';
  // iterate over input strings starting from the end
  while (i >= 0 || j >= 0 || s == 1) {
    // add the current item to (integer) sum
    s += ((i >= 0) ? parseInt(a[i]) : 0);
    s += ((j >= 0) ? parseInt(b[j]) : 0);
    // append 1 if sum is 1 or 3, else append 0
    // to begining of result string
    result = (s % 2 + '') + result;
    // if sum is 2 or 3, 1 is carried, otherwise carry is 0
    s = Math.floor(s / 2);
    i--;
    j--;
  }

  return result;
};