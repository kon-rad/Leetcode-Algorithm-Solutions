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


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const sect = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
    const rowMem = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const colMem = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const originalNumbers = {};
    let backtracking = false;
    let breakInnerLoop = false;
    buildMem(board, sect, rowMem, colMem);

    for (let i = 0; i < 9; i++) {
      let row = board[i];
      for (let j = 0; j < 9; j++) {
        if (breakInnerLoop) {
          breakInnerLoop = false;
          break;
        }
        let num = row[j];
        // if current item is already a number
        // and not backtrackign currently, then skip it. 
        if (num !== '.' && !backtracking) {
          let encodeOriginal = `${i}-${j}`;
          if (!(encodeOriginal in originalNumbers)) {
            originalNumbers[encodeOriginal] = true;
          }
          continue;
        }
        // if backtracking then set count to current num + 1;
        if (backtracking) {
          backtracking = false;
        }

        console.log('num', num);
        let sectX = Math.floor(j / 3);
        let sectY = Math.floor(i / 3);
        let count = 1; 
        let findingNumber = true; 
        while (findingNumber && count < 10 && !backtracking) {
          // todo: while loop get's stuck in infinite
          console.log('count', count);
          if (count in sect[sectX][sectY] || count in rowMem || count in colMem) {
            // cache what numbers were already tried & failed
            count++;
            if (count === 10) {
              console.log('ten here!!!!!');
              backtracking = true;
              // when backtracking - can't modify original num
              j = j - 2;
              if (j < 0) {
                breakInnerLoop = true;
                i = i - 2;
              }
              break;
            }
          } else {
            console.log('not found duplicate', count, sect[sectX][sectY], rowMem, colMem);
            findingNumber = false;
            sect[sectX][sectY][count.toString()] = true;
            rowMem[i][count.toString()] = true;
            colMem[j][count.toString()] = true;
            board[i][j] = count.toString();
          }
        }
        // if backtracking then decrement j by two 
        // todo: if count is 10, then need to go back a step
        // todo: find out how many steps back are needed, or if need to do brute force one by one, maybe need a dictionary of attempts made?
        
      }
    }

    console.log('board', board);
    return board;
};

const buildMem = (board, sect, rowMem, colMem) => {
  for (let i = 0; i < 9; i++) {
    let row = board[i];
    for (let j = 0; j < 9; j++) {
      let sectX = Math.floor(j / 3);
      let sectY = Math.floor(i / 3);
      let num = row[j];
      sect[sectX][sectY][num] = true;
      rowMem[i][num] = true;
      colMem[j][num] = true;
    }
  }
}

const b = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
solveSudoku(b);
