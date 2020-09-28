/**
 * 1329. Sort the Matrix Diagonally
Medium

Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

 

Example 1:


Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100

 */

 /**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const sorted = [];
  const combined = [];
  let m = mat.length;
  let n = 0;
  if (mat.length > 0) {
    n = mat[0].length;
  };
  mat.forEach(arr => combined.push(...arr));
  combined.sort();
  const res = [];
  let ni = -1;
  for (let i = 0; i < combined.length; i++) {
    if (i % n === 0) {
      res.push([]);
      ni++;
    }
    res[ni].push(combined[i]);
  }
  return res;
};
