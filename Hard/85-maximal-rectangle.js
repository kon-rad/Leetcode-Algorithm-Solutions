/**
 * 85. Maximal Rectangle
Hard

Share
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = []
Output: 0
Example 3:

Input: matrix = [["0"]]
Output: 0
Example 4:

Input: matrix = [["1"]]
Output: 1
Example 5:

Input: matrix = [["0","0"]]
Output: 0
 

Constraints:

rows == matrix.length
cols == matrix[i].length
0 <= row, cols <= 200
matrix[i][j] is '0' or '1'.
 */
/**
 * Time: O(m * n) where m is width, and n is height
 * Space: O(m)
 * @param {*} matrix
 * @returns
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let max = 0;
  const cols = matrix[0].length;
  const rows = matrix.length;
  const memo = new Array(cols).fill(0);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      memo[j] = matrix[i][j] === '1' ? memo[j] + 1 : 0;

      let minHeight = memo[j];
      let end = j;
      let pointer = j;
      while (pointer >= 0) {
        if (memo[pointer] === 0) {
          pointer--;
          end = pointer;
          // memo[-1] is undefined
          minHeight = memo[pointer];
          continue;
        }
        let histLen = end - pointer + 1;
        minHeight = Math.min(minHeight, memo[pointer]);
        max = Math.max(max, minHeight * histLen);
        pointer--;
      }
    }
  }
  return max;
};
const m = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['0', '0', '0', '1', '0'],
];
console.log(maximalRectangle(m));
