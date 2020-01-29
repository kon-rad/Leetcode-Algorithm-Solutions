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
 * @return {number}
 */
var totalNQueens = function(n) {
    const col = [];
    const res = [];
    recursive(0, col, n, res);
    return res.length;
};

const recursive = (c, col, n, res) => {
    if (col.length === n) return res.push(col);
    for (let i = 0; i < n; i++) {
        col.push(i);
        if (isValid(col)) {
            recursive(c, col, n, res);
        } else {
            console.log('false');
        }
        col.pop();
    }
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