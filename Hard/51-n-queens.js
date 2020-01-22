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
  const result = [];
  const board = createBoard(n);
  let i = 0, j = 0, si = 0;
  board[0] = insertAtIndex(board[0], 4);
  console.log('board', board);
  const m = {};
  recurse(n, i, si, j, board, m);
  return result;
};
const recurse = (n, i, si, j, board, m) => {
  // last base case
  if (i >= n - 1 && si === n - 1) {
      return;
  }
  // start again from new start index
  if (i >= n - 1) {
      recurse(n, 0, si+1, 0, createBoard(n), {});
  }
  // find next column to insert Q
  let nextCol = j + 1;
  while (nextCol < n && !isValid(m, i, nextCol, n)) {
      nextCol++;
  }
  // 'col' index, aka 'j' is out of bounds, move to next row
  if (j >= n - 1) {
      return recurse(n, i + 1, si, 0, board, {});
  }
  console.log('i', i, board, board[i]);
  board[i] = insertAtIndex(board[i], j + 2);

  return board;
}
const isValid = (m, i, j, n) => {
  if (i in m || j in m) return false;
  let ne = getNE(i, j, n);
  let se = getSE(i, j, n);
  console.log('se', se);
  console.log('ne', ne);
  return !(ne in m) && !(se in m);
}
const getNE = (i, j, n) => {
  let e = n - 1;
  let north = i - (e - i); // row
  let east = e - i; // column
  return north + '-' + east;
}
const getSE = (i, j, n) => {
  let e = n - 1;
  let row = i - j;
  let col = j - i;
  return row + '-' + col;
}
const insertAtIndex = (str, i) => {
  return str.slice(0, i) + 'Q' + str.slice(i + 1);
}
const createBoard = (n) => {
  const b = new Array(n);
  for (let i = 0; i < n; i++) {
      b[i] = new Array(n).fill('.').join('');
  }
  return b;
}
let n = 5;
console.log(solveNQueens(n));





