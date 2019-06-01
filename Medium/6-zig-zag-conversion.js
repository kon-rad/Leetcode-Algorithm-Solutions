/**
6. ZigZag Conversion
Medium

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const len = s.length;
  // two edge cases, both return s
  if (numRows === 1 || numRows >= len) {
      return s;
  }
  const table = new Array(numRows).fill('');
  let row = 0, step = 0;
  for (let i = 0; i < len; i++) {
      table[row] += s[i];
      // eiter this is the first move
      // or the diagnal line has come back up to the top
      // in both cases, we set the course downward
      if (row === 0) {
          step = 1;
      } else if (row === numRows - 1) {
        // the line has reached the bottom row, now we are moving back up the rows
          step = -1;
      }
      row += step;
  }
  // return join all the row strings
  return table.join('');
};

