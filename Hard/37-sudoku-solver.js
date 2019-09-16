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

    for (let i = 0; i < 9; i++) {
      let row = board[i];
      console.log('board', board);
      // if (i === 1) return;
      for (let j = 0; j < 9; j++) {
        console.log('i, j, row, breakInnerLoop', i, j, row, breakInnerLoop);
        if (breakInnerLoop) {
          breakInnerLoop = false;
          console.log('breakInnerLoop', breakInnerLoop);
          break;
        }
        let num = row[j];
        let sectX = Math.floor(j / 3);
        let sectY = Math.floor(i / 3);
        // if current item is already a number
        // and not backtrackign currently, then skip it. 
        if (num !== '.' && !backtracking) {
          if (!backtracking) {
            let encodeOriginal = `${i}-${j}`;
            if (!(encodeOriginal in originalNumbers)) {
              originalNumbers[encodeOriginal] = true;
            }
            sect[sectX][sectY][num] = true;
            rowMem[i][num] = true;
            colMem[j][num] = true;
          }
          continue;
        }

        console.log('num', num);
        let count = 1;
        let countString = count.toString();
        let findingNumber = true;

        // if backtracking then set count to current num + 1;
        if (backtracking) {
          count = parseInt(num) + 1;
          backtracking = false;
          sect[sectX][sectY][num] = false;
          rowMem[i][num] = false;
          colMem[j][num] = false;
        }
        while (findingNumber && count < 10 && !backtracking) {
          // todo: while loop get's stuck in infinite
          console.log('count, i, j', countString, i, j);
          // todo find out why gets stuck in loop
          if (sect[sectX][sectY][countString] || rowMem[i][countString] || colMem[j][countString]) {
            // todo: cache what numbers were already tried & failed
            count++;
            countString = count.toString();
          } else {
            console.log('found new number', count, sect[sectX][sectY], rowMem, colMem);
            findingNumber = false;
            sect[sectX][sectY][countString] = true;
            rowMem[i][countString] = true;
            colMem[j][countString] = true;
            board[i][j] = countString;
          }
        }
        // todo find out why getting empty dots and duplicate values

// num .
// count, i, j 1 8 2
// count, i, j 2 8 2
// count, i, j 3 8 2
// count, i, j 4 8 2
// count, i, j 5 8 2
// count, i, j 6 8 2
// count, i, j 7 8 2
// count, i, j 8 8 2
// count, i, j 9 8 2
// ten here!!!!! i, j 8 0
// board [ [ '8', '3', '1', '2', '7', '4', '5', '6', '9' ],
//   [ '6', '2', '4', '1', '9', '5', '3', '7', '8' ],
//   [ '5', '9', '8', '3', '6', '.', '.', '6', '.' ],
//   [ '1', '4', '2', '5', '6', '3', '7', '8', '3' ],
//   [ '4', '5', '3', '8', '1', '3', '2', '9', '1' ],
//   [ '7', '6', '9', '4', '2', '.', '.', '.', '6' ],
//   [ '.', '6', '5', '7', '3', '1', '2', '8', '4' ],
//   [ '2', '1', '7', '4', '1', '9', '6', '3', '5' ],
//   [ '3', '8', '.', '.', '8', '.', '.', '7', '9' ] ]
        if (countString === '10') {
          backtracking = true;
          // when backtracking - can't modify original num
          j = j - (j === 0 ? 1 : 2);
          console.log('ten here!!!!! i, j', i, j);
          if (j < 0) {
            breakInnerLoop = true;
            // back to start, unable to find solution
            if (i === 0) {
              return [];
            }

            i = i - 1;
          }
          break;
        }
        // if backtracking then decrement j by two 
        // todo: if count is 10, then need to go back a step
        // todo: find out how many steps back are needed, or if need to do brute force one by one, maybe need a dictionary of attempts made?
        
      }
      console.log('board', board);
    }

    return board;
};

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
