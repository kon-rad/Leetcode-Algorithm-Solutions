/**
 * 874. Walking Robot Simulation
Easy

A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

 

Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)
Example 2:

Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)
 

Note:

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31.
 */

 /**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let dir = 'N';
  let maxEuclideanDistance = 0;
  let pos = [0, 0];
  let nextPos;
  commands.forEach(c => {
    console.log('pos', pos);
    console.log('dir', dir);
    if (c === -2) {
      // turn left 90 degrees
      switch (dir) {
        case 'N':
          dir = 'W';
          break;
        case 'E':
          dir = 'N';
          break;
        case 'S':
          dir = 'E';
          break;
        case 'W':
          dir = 'S';
          break;
      }
      return;
    } else if (c === -1) {
      // turn right 90 degrees
      switch (dir) {
        case 'N':
          dir = 'E';
          break;
        case 'E':
          dir = 'S';
          break;
        case 'S':
          dir = 'W';
          break;
        case 'W':
          dir = 'N';
          break;
      }
      return;
    } else {
      // move forward by X places
      switch (dir) {
        case 'N':
          nextPos = [pos[0], pos[1] + c];
          break;
        case 'E':
          nextPos = [pos[0] + c, pos[1]];
          break;
        case 'S':
          nextPos = [pos[0], pos[1] - c];
          break;
        case 'W':
          nextPos = [pos[0] - c, pos[1]];
          break;
      }
      obstacles.forEach(o => {
        if (o[0] === nextPos[0] && o[1] === nextPos[1]) {
          return;
        }
      });
      pos = nextPos.slice();
      let eucDist = getEucDist(pos);
      console.log('eucDist', eucDist);
      if (eucDist > maxEuclideanDistance) {
        maxEuclideanDistance = eucDist;
      }
    }
  });

  return maxEuclideanDistance;
};

const getEucDist = pos => {
  let xDiff = Math.abs(pos[0]);
  let yDiff = Math.abs(pos[1]);
  return xDiff * xDiff + yDiff * yDiff;
}


