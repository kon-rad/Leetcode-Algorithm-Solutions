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
  // create a map of diagnal key to values of each diagnal list
  // the key will be i-j, as it's the same for each diagnal
  const diagnal = new Map;
  for (let i = 0, len = mat.length; i < len; i++) {
    for (let j = 0, len = mat[i].length; j < len; j++) {
      let coord = i - j;
      if (diagnal.has(coord)) {
        // add new value
        diagnal.set(coord, [...diagnal.get(coord), mat[i][j]]);
      } else {
        // create the initial array
        diagnal.set(coord, [mat[i][j]]);
      }
    }
  }
  for (let [key, value] of diagnal) {
    // sort each diagnal array
    diagnal.set(key, value.sort((a, b) => a - b));
  }
  // set the sorted values for each diagnal
  for (let i = 0, len = mat.length; i < len; i++) {
    for (let j = 0, len = mat[i].length; j < len; j++) {
      let coord = i - j;
      mat[i][j] = diagnal.get(coord).shift();
    }
  }
  return mat;
};
