/**
 * 55. Jump Game
Medium

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  let i = 0;

  for (let reach = i; i < len && i <= reach; i++) {
    reach = Math.max(nums[i] + i, reach);
  }
  return i == len;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = [...Array(n)].map(() => Array(n).fill(null));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  // this determines how many steps can be taken
  // on the x and y axis
  const steps = [n, n - 1];

  let num = 1;
  let dir = 0;
  let x = 0;
  // y is set at -1 as the first vertical increment
  // happens before setting the number
  let y = -1;

  // dir % 2 determines the direction, either x or y
  while (steps[dir % 2] > 0) {
    console.log('steps', steps);
    console.log('dir', dir);
    console.log('dir % 2', dir % 2);
    for (let i = 0; i < steps[dir % 2]; i++) {
      x += dirs[dir][0];
      y += dirs[dir][1];
      // x and y is incremented by the use of
      // the directions array
      console.log('x, y, dir', x, y, dir);
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
