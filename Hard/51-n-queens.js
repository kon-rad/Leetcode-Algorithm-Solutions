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
    const result = [];
    const cols = [];
    recurse(n, cols, result);
    return result;
};

const recurse = (n, cols, result) => {
    if (cols.length === n) {
        return result.push(genBoard(cols));
    }
    for (let i = 0; i < n; i++) {
        cols.push(i);
        if (isValid(n, cols)) {
            recurse(n, cols, result);
        }
        cols.pop();
    }
}
const isValid = (n, cols) => {
    const len = cols.length;
    const cur = cols[len - 1];
    for (let i = 0; i < len - 1; i++) {
        if (cols[i] === cur) return false;
        const colDistance = Math.abs(cols[i] - cur);
        if (colDistance === ((len - 1) - i)) return false;
    }
    return true;
}
const genBoard = cols => {
    const len = cols.length;
    const board = [];
    for (let i = 0; i < len; i++) {
        board.push(['']);
        for (let j = 0; j < len; j++) {
            if (cols[i] === j) {
                board[i] += 'Q';
                continue;
            }
            board[i] += '.';
        }
    }
    return board;
}
console.log(solveNQueens(5));