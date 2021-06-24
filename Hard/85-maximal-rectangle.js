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
 * https://leetcode.com/problems/maximal-rectangle/discuss/1228033/DP-concise-explanation-97-faster-Javascript-JS-ES6
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function (matrix) {
  if (!matrix.length) return 0;
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const dp = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let maxArea = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      //update height
      if (row === 0) dp[row][col] = matrix[row][col] == '1' ? 1 : 0;
      else dp[row][col] = matrix[row][col] == '1' ? dp[row - 1][col] + 1 : 0;

      //update area
      let minHeight = dp[row][col];
      for (let pointer = col; pointer >= 0; pointer--) {
        if (minHeight === 0) break;
        if (dp[row][pointer] < minHeight) minHeight = dp[row][pointer];
        maxArea = Math.max(maxArea, minHeight * (col - pointer + 1));
      }
    }
  }
  return maxArea;
};
