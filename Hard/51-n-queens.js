/**
 * 51. N-Queens
Hard

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 */
 /**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 4) return [];
  const results = [];
  const colPlacements = [];
  let row = 0;
  recurse(row, n, colPlacements, results);
  return results;
};
const recurse = (row, n, colPlacements, results) => {
  // last base case
  if (row === n) {
      results.push(
          generateBoardFromPlacement(colPlacements, n)
          );
      return;
  }
  
}
const isValid = (m, i, j, n) => {
}
const generateBoardFromPlacement = (n) => {
  const b = new Array(n);
  for (let i = 0; i < n; i++) {
      b[i] = new Array(n).fill('.').join('');
  }
  return b;
}
let n = 5;
console.log(solveNQueens(n));





