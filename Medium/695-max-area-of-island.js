/**
 * 695. Max Area of Island
Medium

Share
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const seen = {};
    const colLen = grid.length;
    const rowLen = grid[0].length;
    let maxArea = 0;
    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
          if (!seen.hasOwnProperty(`${i}-${j}`)) {
            seen[`${i}-${j}`] = true;
            if (grid[i][j] === 1) {
                let islandArea = getIslandArea(i, j, grid, seen, 1);
                maxArea = islandArea > maxArea ? islandArea : maxArea;
            }
          }
        }   
    }
    return maxArea;
};


const getIslandArea = (i, j, grid, seen, count) => {
    // check one to the right
    if (grid[i][j + 1] === 1 && !seen.hasOwnProperty(`${i}-${j + 1}`)) {
      seen[`${i}-${j + 1}`] = true;
      count += getIslandArea(i, j + 1, grid, seen, 1);
    };
    // check one below
    if (i + 1 < grid.length && grid[i + 1][j] === 1 && !seen.hasOwnProperty(`${i + 1}-${j}`)) {
      seen[`${i + 1}-${j}`] = true;
      count += getIslandArea(i + 1, j, grid, seen, 1);
    };
    // check one to the left
    if (
      j - 1 >= 0 && 
      !seen.hasOwnProperty(`${i}-${j - 1}`) && 
      grid[i][j - 1] === 1
    ) {
      seen[`${i}-${j - 1}`] = true;
      count += getIslandArea(i, j - 1, grid, seen, 1);
    };
    // check one above
    if (
      i - 1 >= 0 && 
      !seen.hasOwnProperty(`${i - 1}-${j}`) && 
      grid[i - 1][j] === 1
    ) {
      seen[`${i - 1}-${j}`] = true;
      count += getIslandArea(i - 1, j, grid, seen, 1);
    };
    return count;
}