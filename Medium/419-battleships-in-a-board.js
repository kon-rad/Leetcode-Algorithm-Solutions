/**
419. Battleships in a Board
Medium

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
 */

 /**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const mapB = {};
  let count = 0;
  const yLen = board.length;
  const xLen = board[0].length;
  for(let y = 0; y < yLen; y++) {
      for(let x = 0; x < xLen; x++) {
          let cur = board[y][x];
          const coord = y + '-' + x;
          if (cur === 'X') {
              if (mapB.hasOwnProperty(coord)) {
                  continue;
              } else {
                  mapB[coord] = true;
                  count++;
                  findBattleship(y, x, board, mapB);
              }
          }
      }
  }
  return count;
};

const findBattleship = (y, x, board, mapB) => {
  const startY = y, startX = x;
  while (x < board[0].length && board[y][x] === 'X') {
      mapB[y + '-' + x] = true;
      x++;
  }
  y = startY;
  x = startX;
  while (y < board.length && board[y][x] === 'X') {
      mapB[y + '-' + x] = true;
      y++;
  }
}

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;
  const yLen = board.length;
  const xLen = board[0].length;
  for(let y = 0; y < yLen; y++) {
      for(let x = 0; x < xLen; x++) {
          if (board[y][x] === 'X') {
              if ((y === 0 || board[y-1][x] === '.') && (x === 0 || board[y][x - 1] === '.')) {
                  count++;
              }
          }
      }
  }
  return count;
};