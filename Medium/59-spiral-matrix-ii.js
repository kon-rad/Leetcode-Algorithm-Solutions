/**
 * 59. Spiral Matrix II
Medium

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [...Array(n)].map(() => Array(n).fill(null));
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // this determines how many steps can be taken
  // on the x and y axis
  const steps = [n, n - 1];

  let num = 1;
  let dir = 0;
  let x = 0;
  // y is set at -1 as the first vertical increment
  // happends before setting the number
  let y = -1;

  // dir % 2 determines the direction, either x or y
  while (steps[dir % 2] > 0) {
      for (let i = 0; i < steps[dir % 2]; i++) {
          x += dirs[dir][0];
          y += dirs[dir][1];
          // x and y is incremented by the use of
          // the directions array
          // add next number in the matrix
          matrix[x][y] = num++;
      }
      // decrement the steps count
      steps[dir % 2]--;
      // direction is 0 to 3, as there are 4 directions
      // (right, down, left, up)
      dir = (dir + 1) % 4;
  } 

  return matrix;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // new matrix to populate
    let m = [...Array(n)].map(() => (new Array(n).fill(null)));
    // direction
    let dir = 0;
    // determines how long to continue in current direction
    let len = n;
    // the length of the next phase after direction change, it will be either the same as current or shorter by 1
    let nextLen = n;
    // keeps track of when to decrement the length by 1, this happens on every other direction change
    let decrementLen = 1;
    // array of directions, hold values of y and x increment/decrement
    const dirs = [
      // y, x
      [0, 1], // right
      [1, 0], // down
      [0, -1], // left
      [-1, 0], // up
    ];
    let x = 0;
    let y = 0;
    for (let i = 1; i <= n * n; i++) {
      // write value to new matrix
      m[y][x] = i;
      len--;
      if (len === 0) {
        decrementLen--;
        if (decrementLen === 0) {
          // reached the edge where need to decrement the length
          decrementLen = 2;
          nextLen--;
          len = nextLen;
        } else {
          // the edge where the two direction phases are the same length
          len = nextLen;
        }
        // change direction
        dir = (dir + 1) % 4;
      }
      // increment progress in spiral
      x += dirs[dir][1];
      y += dirs[dir][0];
    }
    return m
  };