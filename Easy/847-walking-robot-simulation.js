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
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const obst = obstacles.reduce((acc, cur) => {
    acc[`${cur[0]}:${cur[1]}`] = true 
    return acc;
  }, {});
  let dir = 0;
  let max = 0;
  let x = 0, y = 0;
  commands.forEach(c => {
    if (c === -1) {
      dir = (dir + 1) % 4
    } else if (c === -2) {
      dir = (dir + 3) % 4;
    } else {
      let dx = dirs[dir][0]
      let dy = dirs[dir][1]
      for (let i = 0; i < c; i++) {
        x += dx;
        y += dy;
        if (obst.hasOwnProperty(`${x}:${y}`)) {
          x -= dx;
          y -= dy;
          break;
        }
      }
      max = Math.max(max, x*x + y*y)
    }
  });

  return max;
};

