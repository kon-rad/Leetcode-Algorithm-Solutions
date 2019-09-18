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
    let backtracking = false;
    let breakInnerLoop = false;
    let startInnerLoopAtIndexEight = false;
    buildDictionary(board, sect, rowDict, colDict);

    for (let i = 0; i < 9; i++) {
      let row = board[i];
      console.log('new row, i, backtracking, breakInnerLoop', i, backtracking, breakInnerLoop);
      // if (i === 1) return;
      for (let j = 0; j < 9; j++) {
        console.log('new inner loop: i, j, row, backtracking, breakInnerLoop', i, j, row, backtracking, breakInnerLoop);
        if (i === 3) return;
        if (breakInnerLoop) {
          console.log('breakInnerLoop, backtracking, *set to false', breakInnerLoop, backtracking);
          breakInnerLoop = false;
          backtracking = false;
          i = i-2;
          startInnerLoopAtIndexEight = true;
          if (i < 0) {
            i = -1;
          }
          break;
        }
        if (startInnerLoopAtIndexEight && j === 0) {
          startInnerLoopAtIndexEight = false;
          // 7 plus one on next iteration equals 8
          j = 7;
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
          backtracking = false;
          count = parseInt(num) + 1;
          if (count === 10) {
            backtracking = true;
            j = j - 2;
            if (j < 0) {
              j = 0;
              breakInnerLoop = true;
              i = i - 2;
              if (i < 0) {
                i = -1;
                startInnerLoopAtIndexEight = true;
              }
              // todo: since break here why is breakInnerLoop flag necessary?
              break;
            }
            continue;
          }
          countString = count.toString();
          sect[sectX][sectY][num] = false;
          rowDict[i][num] = false;
          colDict[j][num] = false;
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
            j = 0;
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

// todo: find out how to properly go back steps
/**
 * i, j, row 2 2 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true
new inner loop: i, j, row, backtracking, breakInnerLoop 2 3 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true false
current num 3
count, i, j 4 2 3
count, i, j 5 2 3
count, i, j 6 2 3
count, i, j 7 2 3
count, i, j 8 2 3
count, i, j 9 2 3
max count reached!!! i 2
i, j, row 2 1 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true
new inner loop: i, j, row, backtracking, breakInnerLoop 2 2 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true false
current num 8
count, i, j 9 2 2
max count reached!!! i 2
i, j, row 2 0 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true
new inner loop: i, j, row, backtracking, breakInnerLoop 2 1 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] true false
current num 9
new row, i, backtracking, breakInnerLoop 1 true true
new inner loop: i, j, row, backtracking, breakInnerLoop 1 0 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] true true
breakInnerLoop, backtracking, *set to false true true
new row, i, backtracking, breakInnerLoop 0 false false
new inner loop: i, j, row, backtracking, breakInnerLoop 0 0 [ '8', '3', '1', '2', '7', '6', '5', '9', '4' ] false false
new row, i, backtracking, breakInnerLoop 1 false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 0 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 1 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 2 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 3 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 4 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 5 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 6 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 7 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 1 8 [ '6', '2', '4', '1', '9', '5', '7', '3', '8' ] false false
new row, i, backtracking, breakInnerLoop 2 false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 0 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 1 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 2 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 3 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 4 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
new inner loop: i, j, row, backtracking, breakInnerLoop 2 5 [ '5', '9', '8', '3', '4', '.', '.', '6', '.' ] false false
current num .
count, i, j 1 2 5
count, i, j 2 2 5
count, i, j 3 2 5
count, i, j 4 2 5
count, i, j 5 2 5
count, i, j 6 2 5
count, i, j 7 2 5
count, i, j 8 2 5
count, i, j 9^C
 */

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
