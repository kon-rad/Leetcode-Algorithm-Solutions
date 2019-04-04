/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 */


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const original = board.map(arr => arr.slice());
  let n;
  for (let y = 0, yLen = board.length; y<yLen; y++) {
      for (let x = 0, xLen = board[y].length; x < xLen; x++) {
          n = numberOfNeighbors(original, x, y, xLen, yLen);
          console.log(original, n, y, x);
          if (n < 2) {
              board[y][x] = 0;
          } else if (n === 2) {
              continue;
          } else if (n > 3) {
              board[y][x] = 0;
          } else if (n === 3) {
              board[y][x] = 1;
          }
      }
  }
  return board;
};

function numberOfNeighbors(original, x, y, xLen, yLen) {
  let c = 0;
  for (let i = -1; i < 2 && y+i < yLen; i++) {
      for (let j = -1; j < 2 && x+j < xLen; j++) {
          if (y+i < 0 || x+j < 0 || (i === 0 && j === 0)) continue;
          c += original[y+i][x+j];
      }
  }
  return c;
}