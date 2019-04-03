/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let mlen, l, start, end, mid;
  for (let i = 0, mlen = matrix.length; i<mlen; i++) {
      l = matrix[i].length;
      start = 0;
      end = l-1;
      if (target < matrix[i][start] || target > matrix[i][end]) continue;
      mid = start + Math.floor((end-start)/2);
      while (start +1 < end) {
          mid = start + Math.floor((end-start)/2);
          if (target > matrix[i][mid]) {
              start = mid;
          } else {
              end = mid;
          }
      }
      if (target === matrix[i][mid] || target === matrix[i][end] || target === matrix[i][start]) {
          return true;
      }
  }
  return false;
};

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else row++;
  }

  return false;
}
