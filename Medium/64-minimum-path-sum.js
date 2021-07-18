/**
 * 64. Minimum Path Sum
Medium

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
 */

/**
 * Time:O(m*n) (widht * height of grid)
 * Space: O(1)
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const height = grid.length;
  const width = grid[0].length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = grid[i][j];
        continue;
      }
      if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
        continue;
      }
      if (j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
        continue;
      }
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }
  return grid[height - 1][width - 1];
};
