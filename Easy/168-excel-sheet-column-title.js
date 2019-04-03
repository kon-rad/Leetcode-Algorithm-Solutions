/**
 *
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"

 */


/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = n => {
    if (n < 27) {
      return String.fromCharCode(((n - 1) % 26) + 65);
    }
    return (
      convertToTitle(Math.floor((n - 1) / 26)) +
      String.fromCharCode(((n - 1) % 26) + 65)
    );
  };


  /**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    // comment for good speed
    let r = '';
    while (n > 26) {
        if (n%26 === 0) {
            r = 'Z'+r;
            n = Math.floor(n / 26) - 1;
        } else {
            r = String.fromCharCode(64 + (n%26)) + r;
            n = Math.floor(n / 26);
        }

    }
    return String.fromCharCode(64 + n) + r;
};