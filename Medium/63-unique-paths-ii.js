/**
 * 63. Unique Paths II
Medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles2 = function (obstacleGrid) {
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) {
    return 0;
  }
  let dp = new Array(obstacleGrid.length)
    .fill()
    .map((row) => new Array(obstacleGrid[0].length).fill(0));
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      let up;
      let left;
      if (i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1) {
        up = dp[i - 1][j];
      } else {
        up = 0;
      }
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1) {
        left = dp[i][j - 1];
      } else {
        left = 0;
      }
      dp[i][j] += +up + left;
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
  p;
};
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const height = obstacleGrid.length;
  const width = obstacleGrid[0].length;
  const dp = obstacleGrid;
  if (dp[0][0] === 1) {
    return 0;
  } else {
    dp[0][0] = 1;
  }
  for (let i = 1; i < width; i++) {
    dp[0][i] = dp[0][i] === 0 && dp[0][i - 1] === 1 ? 1 : 0;
  }
  for (let j = 1; j < height; j++) {
    dp[j][0] = dp[j][0] === 0 && dp[j - 1][0] === 1 ? 1 : 0;
  }
  for (let i = 1; i < width; i++) {
    for (let j = 1; j < height; j++) {
      const left = dp[j - 1][i];
      const up = dp[j][i - 1];
      const sum = left + up;
      dp[j][i] = dp[j][i] === 1 ? 0 : sum;
    }
  }
  return dp[height - 1][width - 1];
};

const grid = [
  [0, 0],
  [1, 1],
  [0, 0],
];
console.log(uniquePathsWithObstacles(grid));
