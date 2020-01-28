/**
 * 52. N-Queens II
Hard

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
 */


/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const col = [];
  return recursive(0, col, n);
};

const recursive = (c, col, n) => {
  if (col.length === n) return c + 1;
  for (let i = 0; i < n; i++) {
      col.push(i);
      if (isValid(col)) {
          c += recursive(c, col, n);
      }
      col.pop();
  }
  return c;
}
const isValid = col => {
  const cur = col[col.length - 1];
  for (let i = 0; i < col.length - 1; i++) {
      if (col[i] === cur) return false;
      const diff = Math.abs(cur - col[i]);
      if (diff === (col.length - 1) - i) return false;
  }
  return true;
}
console.log(totalNQueens(5));