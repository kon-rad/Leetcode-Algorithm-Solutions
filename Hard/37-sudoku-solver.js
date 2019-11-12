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

var solve = function(board, row, col){
    
    for(let i=row; i<9; i++, col=0){
        for(let j=col; j<9; j++){
            if(board[i][j] !== '.') continue;
            for(let c=1; c<=9; c++){
                console.log('board', board);
                if(isValid(board, i, j, c.toString())){
                    board[i][j] = c.toString();
                    
                    if(solve(board, i, j+1)){
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

var isValid = function(board, x, y, c){
    let rowStart = Math.floor(x/3) * 3;
    let colStart = Math.floor(y/3) * 3;
    
    for(let i=0; i<9; i++){
        if(board[i][y] === c || board[x][i] === c) return false;
    }
    
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[rowStart+i][colStart+j] === c) return false;
        }
    }
    
    return true;
}





console.log('solution: ', solveSudoku(t1));





