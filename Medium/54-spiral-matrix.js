/**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const ans = [];
  if (!matrix || !matrix[0]) return ans;
  let colBegin = 0;
  let colEnd = matrix[0].length-1;
  let rowBegin = 0;
  let rowEnd = matrix.length-1;
  while (colBegin <= colEnd && rowBegin <= rowEnd) {
      // traverse right
      for (let i = colBegin; i <= colEnd; i++) {
          ans.push(matrix[rowBegin][i]);
      }

      // traverse down
      rowBegin++;
      for (let i = rowBegin; i <= rowEnd; i++) {
          ans.push(matrix[i][colEnd]);
      }
      // traverse left
      colEnd--;
      if (rowBegin <= rowEnd) {
          for (let i = colEnd; i >= colBegin; i--) {
              ans.push(matrix[rowEnd][i]);
          }
      }
      // traverse up
      rowEnd--;
      if (colBegin <= colEnd) {
          for (let i = rowEnd; i >= rowBegin; i--) {
              ans.push(matrix[i][colBegin]);
          }
      }
      colBegin++;
  }
  return ans;
};