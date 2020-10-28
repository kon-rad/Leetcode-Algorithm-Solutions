/**
 * 885. Spiral Matrix III
Medium

On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.

Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.

Now, we walk in a clockwise spiral shape to visit every position in this grid. 

Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.) 

Eventually, we reach all R * C spaces of the grid.

Return a list of coordinates representing the positions of the grid in the order they were visited.

 

Example 1:

Input: R = 1, C = 4, r0 = 0, c0 = 0
Output: [[0,0],[0,1],[0,2],[0,3]]


 

Example 2:

Input: R = 5, C = 6, r0 = 1, c0 = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]


 

Note:

1 <= R <= 100
1 <= C <= 100
0 <= r0 < R
0 <= c0 < C

 */

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  let m = R * C;
  let colMax = c0 + 1;
  let colMin = c0 - 1;
  let rowMax = r0 + 1;
  let rowMin = r0 - 1;
  let c = c0;
  let r = r0;
  const dirs = [
    // row, col
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];
  let dirIndex = 0;
  const result = [];
  const colRigthEdge = C - 1;
  const colLeftEdge = 0;
  const rowUpperEdge = 0;
  const rowBottomEdge = R - 1;
  const visited = {};
  while (result.length < C * R) {

    const curr = `${r}-${c}`;
    if (isInBounds(r, c, R, C) && !visited.hasOwnProperty(curr)) {
      result.push([r, c]);
      visited[curr] = true;
    }
    c += dirs[dirIndex][1];
    r += dirs[dirIndex][0];

    if (dirIndex === 0) {
      // moving right
      if (c === colMax) {
        if (c != colRigthEdge) {
          colMax++;
        } else {
          // reached the edge, and the colMax equals edge
          // need to skip down to new row
          // then need to account for possibility of row being after the edge too
        }
        dirIndex = (dirIndex+1) % 4;
      }
    } else if (dirIndex === 1) {
      // moving down
      if (r === rowMax) {
        if (r != rowBottomEdge) {
          rowMax++;
        }
        dirIndex = (dirIndex+1) % 4;
      }
    } else if (dirIndex === 2) {
      // moving left
      if (c === colMin) {
        if (c != colLeftEdge) {
          colMin--;
        }
        dirIndex = (dirIndex+1) % 4;
      }
    } else if (dirIndex === 3) {
      // moving up
      if (r === rowMin) {
        if (r != rowUpperEdge) {
          rowMin--;
        }
        dirIndex = (dirIndex+1) % 4;
      }
    }
  }
  return result;
};

const isInBounds = (r, c, R, C) => {
  return r >= 0 && r < R && c >= 0 && c < C;
};