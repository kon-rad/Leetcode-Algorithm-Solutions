/*
37. Sudoku Solver
Hard

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...

...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/

const b = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];


const t1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    return solve(board, 0, 0);
};

const solve = (board, row, col) => {
    for (let i = row; i < 9; i++, col = 0) {
        for (let j = col; j < 9; j++) {
            if (board[i][j] !== '.') continue;
            for (let k = 1; k < 10; k++) {
                if (isValid(board, i, j, k.toString())) {
                    board[i][j] = k.toString();
                    if (solve(board, i, j + 1)) {
                        return true;
                    }
                    board[i][j] = '.';
                }
            }
            return false;
        }
    }
    return true;
}
const isValid = (board, row, col, k) => {
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === k || board[i][col] === k) return false;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart + i][colStart + j] === k) return false;
        }
    }
    return true;
}
console.log('solution: ', solveSudoku(t1));
