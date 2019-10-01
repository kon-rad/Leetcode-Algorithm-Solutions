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
var solveSudoku = function (board) {
    const sect = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
    const rowDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const colDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const originalNumbers = {};
    let i = 0, j = 0;
    let backtracking = false;
    let encodeOriginal = '';
    buildDictionary(board, sect, rowDict, colDict, originalNumbers);

    for (i; i < 9; i++) {
        let row = board[i];
        console.log('start new outer loop: i, board, backtracking', i, board, backtracking, j);
        if (j === 9) j = 0;
        for (j; j < 9; j++) {
            console.log('start new inner loop: i, j, row, backtracking', i, j, row, backtracking);

            // FIXME loop gets stuck between 1-8 and 2-5
            let num = row[j];
            let sectX = Math.floor(j / 3);
            let sectY = Math.floor(i / 3);
            // if current item is already a number
            // and not backtrackign currently, then skip it. 

            console.log('current num: ', num, '\n one of original: ', `${i}-${j}` in originalNumbers);
            let count = 1;
            let countString = count.toString();
            let findingNumber = true;

            // if backtracking then set count to current num + 1;
            if (backtracking) {
                if (`${i}-${j}` in originalNumbers) {
                    j = j - 2;
                    if (j < 0) {
                        j = 8;
                        i = i - 2;
                        if (i < 0) {
                            i = -1;
                            j = 0;
                            backtracking = false;
                        }
                        break;
                    }
                    continue
                }
                // if current position is not one of the original board, then remove it from board and dictionary
                clearSpace(sect, sectX, sectY, num, i, j, rowDict, colDict, board);
                count = parseInt(num) + 1;
                countString = count.toString();
                if (count === 10) {
                    j = j - 2;
                    if (j < 0) {
                        j = 8;
                        i = i - 2;
                        if (i < 0) {
                            i = -1;
                            j = 0;
                            backtracking = false;
                        }
                        break;
                    }
                    continue;
                }
                backtracking = false;
            } else if (num !== '.' && `${i}-${j}` in originalNumbers) {
                console.log('original number: skip to new inner loop: i, j, row, backtracking', i, j, row, backtracking);
                continue;
            }

            // console.log('sect[sectX][sectY][countString], rowDict[i][countString], colDict[j][countString]', sect[sectX][sectY][countString], rowDict[i][countString], colDict[j][countString]);
            // console.log('sect, rowDict, colDict', sect, rowDict, colDict);
            clearSpace(sect, sectX, sectY, num, i, j, rowDict, colDict, board);
            while (findingNumber && count < 10 && !backtracking) {
                // todo: while loop get's stuck in infinite
                console.log('inside while loop: count, i, j', countString, i, j);
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
            if (count >= 10) {
                clearSpace(sect, sectX, sectY, num, i, j, rowDict, colDict, board);
                backtracking = true;
                j = j - 2;
                console.log('max count reached!!! i', i);
                if (j < 0) {
                    j = 8;
                    i = i - 2;
                    if (i < 0) {
                        i = -1;
                        j = 0;
                        backtracking = false;
                    }
                    break;
                }
            }
            console.log('end of inner loop: i, j, row', i, j, row, backtracking);
        }
    }

    return board;
};

const buildDictionary = (board, sect, rowDict, colDict, originalNumbers) => {
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
      originalNumbers[`${i}-${j}`] = true;
    }
  }
};

const clearSpace = (sect, sectX, sectY, num, i, j, rowDict, colDict, board) => {
    sect[sectX][sectY][num] = false;
    rowDict[i][num] = false;
    colDict[j][num] = false;
    board[i][j] = '.';
}

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
console.log('solution: ', solveSudoku(b));
