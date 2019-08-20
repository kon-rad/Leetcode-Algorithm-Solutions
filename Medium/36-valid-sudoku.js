/**
36. Valid Sudoku
Medium

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.


 */

 /**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMem = {};
    let ans = true;
    let columnMem = (new Array(9).fill(0)).map(e => []);
    let sectMem = {
      0: [[], [], []],
      1: [[], [], []],
      2: [[], [], []]
    };
    for (let rowIndex = 0, rows = board.length; rowIndex < rows; rowIndex++) {
      rowMem = {};
      rowSum = 0;
      let row = board[rowIndex];
      let sectRow = rowIndex < 3 ? 0 : rowIndex < 6 ? 1 : 2;
      for (let columnIndex = 0, rowLenght = row.length; columnIndex < rowLenght; columnIndex++) {
        let currentNumber = row[columnIndex];
        if (currentNumber === '.') continue;
        rowSum += parseInt(currentNumber);
        let sectCol = columnIndex < 3 ? 0 : columnIndex < 6 ? 1 : 2;
        if (rowMem.hasOwnProperty(currentNumber)
          || columnMem[columnIndex].includes(currentNumber)
          || sectMem[sectRow][sectCol].includes(currentNumber)
        ) {
          ans = false;
          break;
        }
        rowMem[currentNumber] = true
        columnMem[columnIndex].push(currentNumber);
        sectMem[sectRow][sectCol].push(currentNumber);
      }
      if (!ans) break;
    };

    return ans;
};


