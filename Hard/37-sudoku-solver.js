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
    const rowDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const colDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const originalNumbers = {};
    let i = 0, j = 0;
    let backtracking = false;
    let breakInnerLoop = false;
    let encodeOriginal = '';
    buildDictionary(board, sect, rowDict, colDict);

    for (i; i < 9; i++) {
      let row = board[i];
      console.log('new: i, board, backtracking, breakInnerLoop', i, board, backtracking, breakInnerLoop, j);
      // if (i === 1) return;
      if (j === 9) j = 0;
      for (j; j < 9; j++) {
        console.log('new inner loop: i, j, row, backtracking, breakInnerLoop', i, j, row, backtracking, breakInnerLoop);
        // if (i === 3) return;
        if (breakInnerLoop) {
          console.log('breakInnerLoop, backtracking, *set to false', breakInnerLoop, backtracking);
          breakInnerLoop = false;
          backtracking = false;
          i = i-2;
          if (i < 0) {
            i = -1;
          }
          break;
        }
        let num = row[j];
        let sectX = Math.floor(j / 3);
        let sectY = Math.floor(i / 3);
        // if current item is already a number
        // and not backtrackign currently, then skip it. 
        if (num !== '.' && !backtracking) {
          if (!backtracking) {
            encodeOriginal = `${i}-${j}`;
            if (!(encodeOriginal in originalNumbers)) {
              originalNumbers[encodeOriginal] = true;
            }
            sect[sectX][sectY][num] = true;
            rowDict[i][num] = true;
            colDict[j][num] = true;
          }
          continue;
        }

        console.log('current num', num);
        let count = 1;
        let countString = count.toString();
        let findingNumber = true;

        // if backtracking then set count to current num + 1;
        if (backtracking) {
          if (`${i}-${j}` in originalNumbers) {
            j = j - 2;
            if (j < 0) {
              breakInnerLoop = true;
              j = 8;
              i = i - 2;
              if (i < 0) {
                i = -1;
              }
              // todo: since break here why is breakInnerLoop flag necessary?
              break;
            }
            continue
          } else {
            // if current position is not one of the original board, then remove it from board and dictionary
            sect[sectX][sectY][num] = false;
            rowDict[i][num] = false;
            colDict[j][num] = false;
            board[i][j] = '.';
          }
          backtracking = false;
          count = parseInt(num) + 1;
          countString = count.toString();
          if (count === 10) {
            backtracking = true;
            j = j - 2;
            if (j < 0) {
              breakInnerLoop = true;
              j = 8;
              i = i - 2;
              if (i < 0) {
                i = -1;
              }
              // todo: since break here why is breakInnerLoop flag necessary?
              break;
            }
            continue;
          }
        }
        while (findingNumber && count < 10 && !backtracking) {
          // todo: while loop get's stuck in infinite
          console.log('count, i, j', countString, i, j);
          // todo find out why gets stuck in loop
          if (sect[sectX][sectY][countString] || rowDict[i][countString] || colDict[j][countString]) {
            // todo: cache what numbers were already tried & failed
            count++;
            countString = count.toString();
          } else {
            console.log('found new number', count);
            findingNumber = false;
            sect[sectX][sectY][countString] = true;
            rowDict[i][countString] = true;
            colDict[j][countString] = true;
            board[i][j] = countString;
          }
        }
        if (countString === '10') {
          backtracking = true;
          // when backtracking - can't modify original num
          j = j - 2;
          console.log('max count reached!!! i', i);
          if (j < 0) {
            j = 8;
            breakInnerLoop = true;
            // back to start, unable to find solution
            if (i === 0) {
              return [];
            }

            i = i - 1;
            break;
          }
        }
        // if backtracking then decrement j by two 
        // todo: if count is 10, then need to go back a step
        // todo: find out how many steps back are needed, or if need to do brute force one by one, maybe need a dictionary of attempts made?
        console.log('i, j, row', i, j, row, backtracking);
      }
    }

    return board;
};

const buildDictionary = (board, sect, rowDict, colDict) => {
  for (let i = 0; i < 9; i++) {
    let row = board[i];
    for (let j = 0; j < 9; j++) {
      let num = row[j];
      let sectX = Math.floor(j / 3);
      let sectY = Math.floor(i / 3);
      if (num === '.') {
        continue;
      }
      sect[sectX][sectY][num] = true;
      rowDict[i][num] = true;
      colDict[j][num] = true;
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
console.log('solution: ', solveSudoku(b));
