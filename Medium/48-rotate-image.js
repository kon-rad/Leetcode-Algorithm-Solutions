/**
 * 48. Rotate Image
Medium

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate1 = function(matrix) {
  if (matrix.length === 1) {
      return matrix;
  }
  helper([0,0], matrix[0][0], matrix, 0, [0,0], matrix.length, false);
  return matrix;
};

const find = (xy, len) => {
  let l = xy[1];
  let t = xy[0];
  let b = (len - 1) - t;
  return [l, b];
}

const helper = (xy, n, m, count, start, len, last) => {
  let xy2 = find(xy, len);
  let temp = m[xy2[0]][xy2[1]];
  m[xy2[0]][xy2[1]] = n;
  count++;
  if (count >= 4) {
      if (last || len === 2) {
          return m;
      }
      count = 0;
      start[1]++;
      xy2[1]++;
      temp = m[xy2[0]][xy2[1]];
      if (start[1] >= (len - 1) - start[0]) {
          start[1] = start[0] + 1;
          start[0]++;
          xy2 = start.slice(0);
          temp = m[xy2[0]][xy2[1]];
          // check if it's in the middle 
          // or if even length, if the center square
          if (len % 2 === 0) {
              let end = (len / 2) - 1;
              if (start[1] === end) {
                  last = true;
                  // return m;
              }
          } else {
              let end = Math.floor(len / 2);
              if (start[1] === end) {
                  return m;
              }
          }
      }
  }
  helper(xy2, temp, m, count, start, len, last);
}

const rotate = matrix => {
    const rev = matrix.reverse();
    const len = matrix.length;
    for (const i in rev) {
      for (let j = parseInt(i) + 1; j < len; j++) {
          let temp = rev[i][j];
          rev[i][j] = rev[j][i];
          rev[j][i] = temp;
      }
    }
    return rev;
  }

const matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
];
console.log(rotate(matrix));
