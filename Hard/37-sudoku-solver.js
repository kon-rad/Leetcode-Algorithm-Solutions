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


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const sect = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
    const rowDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const colDict = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const originalNumbers = {};
    const data = {
        sect,
        rowDict,
        colDict,
        originalNumbers,
        board
    }
    let i = 0, j = 0;
    let backtracking = false;
    let encodeOriginal = '';
    buildDictionary(data);
    debugger;

    while (i < 9) {
        if (i < 0) {
            i = 0;
            backtracking = false;
        }
        let row = board[i];
        // console.log('start new outer loop: i, board, backtracking', i, board, backtracking, j);
        // jumps from i = 1 j = 0
        // to i = 0 j = 0
        if (j === 9) j = 0;
        while (j < 9) {
            console.log(`i = ${i} j = ${j} backtracking = ${backtracking}`);
            console.log('board\n', board);
            // currently goes up to i = 2 j = 5 and back loopp
            // console.log('start new inner loop: i, j, row, backtracking', i, j, row, backtracking);

            if (j < 0) {
                if (i === 0) {
                    j = 0;
                } else {
                    j = 8;
                }
                break;
            }
            let num = row[j];
            // if current item is already a number
            // and not backtrackign currently, then skip it. 
            // console.log('current num: ', num, '\n one of original: ', `${i}-${j}` in originalNumbers);
            let count = 1;
            let countString = '1';

            // if backtracking then set count to current num + 1;
            console.log('count', num, i, j, row);
            if (backtracking) {
                if (!(`${i}-${j}` in originalNumbers)) {
                    // if current position is not one of the original board, then remove it from board and dictionary
                    clearSpace(data, num, i, j);
                    backtracking = findNextNumber(data, i, j);
                    console.log('inside');

                }
                console.log('outside');
            } else if (num !== '.' && `${i}-${j}` in originalNumbers) {
                // console.log('original number: skip to new inner loop: i, j, row, backtracking', i, j, row, backtracking);
                // j += 1;
            } else {
                console.log('hello');
                clearSpace(data, num, i, j);
                backtracking = findNextNumber(data, i, j);
            }
            j = backtracking ? j - 1 : j + 1;
        }
	    i = backtracking ? i - 1 : i + 1;
    }

    return board;
};

const findNextNumber = ({ board, sect, rowDict, colDict, originalNumbers }, i, j) => {
    const sectX = Math.floor(j / 3);
    const sectY = Math.floor(i / 3);
    let count = board[i][j] === '.' ? 1 : board[i][j];
    let countString = count + '';
    let numbersMoved = 0;
    console.log('inside finding', count);
    while (numbersMoved < 9) {
        console.log('hellocount', count);
        if (!sect[sectX][sectY][countString] && !rowDict[i][countString] && !colDict[j][countString]) {
            console.log('next number found: ', countString);
            sect[sectX][sectY][countString] = true;
            rowDict[i][countString] = true;
            colDict[j][countString] = true;
            board[i][j] = countString;
            return false;
        }
        count++;
        numbersMoved++;
        countString = count.toString()
        if (count > 9) {
            count = 1;
        }
    }
    // now it gets stuck in infinite loop 
    console.log('hellocount after while', count, board[i][j]);
    if (numbersMoved >= 9) {
        // board[i][j] = '0';
        return true;
    }
    return false;
}

const buildDictionary = ({ board, sect, rowDict, colDict, originalNumbers }) => {
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

const clearSpace = ({ sect, rowDict, colDict, board }, num, i, j) => {
    const sectX = Math.floor(j / 3);
    const sectY = Math.floor(i / 3);
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
