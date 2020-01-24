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
  for (let col = 0; col < n; col++) {
      colPlacements.push(col);
      if (isValid(colPlacements)) {
          recurse(row + 1, n, colPlacements, results);
      }
      colPlacements.pop();
  }
  
}
const isValid = (colPlacements) => {
  let rowValidating = colPlacements.length - 1;
  for (let ithQueenRow = 0; ithQueenRow < rowValidating; ithQueenRow++) {
      let absColDist = Math.abs(
          colPlacements[ithQueenRow] - colPlacements[rowValidating]
      );
      let rowDistance = rowValidating - ithQueenRow;
      if (absColDist === 0 || absColDist === rowDistance) {
          return false;
      }
  }
  return true;
}
const generateBoardFromPlacement = (colPlacements, n) => {
  const b = [];
  let totalPlaced = colPlacements.length;
  for (let i = 0; i < totalPlaced; i++) {
      let row = '';
      for (let col = 0; col < n; col++) {
          if (col === colPlacements[i]) {
              row += 'Q';
          } else {
              row += '.';
          }
      }
      b.push(row);
  }
  return b;
}