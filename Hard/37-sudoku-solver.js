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

// note: get inspo from this solution https://stackoverflow.com/a/19971983/6383727
// todos: follow this https://www.codefellows.org/blog/sudoku-solver-from-scratch-in-javascript-tdd-style-a-tutorial/
// lots of info http://www.sudokuwiki.org/sudoku.htm
// inspo https://leetcode.com/problems/sudoku-solver/discuss/15752/Straight-Forward-Java-Solution-Using-Backtracking


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
    ["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];







var solveSudoku = function(board) {
    return solve(board, 0, 0);
};

const solve = (board, i, j) => {
    for (let y = i; y < 9; y++) {
        for (let x = j; j < 9; y++) {
            if (board[x][y] !== '.') continue;
            for (let num = 1; num < 9; num++) {
                board[x][y] = num.toString();
                if (isValid(board, i, j)) {
                    return solve(board, x, y);
                }
                board[x][y] = '.';
            }
            console.log('board', board);
        }
    }
}

const isValid = (board, i, j) => {
    const num = board[i][j];

    // check horizontal
    for (let k = 1; k <= 9; k++) {
        if (parseInt(board[k][j]) === k && k !== y) {
            return false;
        }
        if (parseInt(board[i][k]) === k && k !== y) {
            return false;
        }
    }

    // check vertical

    return true;
}



console.log('solution: ', solveSudoku(t1));





