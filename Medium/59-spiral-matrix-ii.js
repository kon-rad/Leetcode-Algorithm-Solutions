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