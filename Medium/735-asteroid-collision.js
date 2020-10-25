/**
 * 735. Asteroid Collision
Medium


We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
Example 4:

Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.
 

Constraints:

1 <= asteroids <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
 */

 /**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  for (let i = 0; i < asteroids.length - 1; i++) {
    if (i < 0) {
      if (asteroids.length > 1) {
        i = 0;
      } else {
        break;
      }
    }
    let curAst = asteroids[i];
    let nextAst = asteroids[i+1];
    if (curAst < 0 || nextAst > 0) {
      continue;
    } else {
      // equal weight
      if (curAst === Math.abs(nextAst)) {
        asteroids.splice(i, 2);
        // go back two spots to check a new
        // interaction
        i -= 2;
        continue;
      } else if (curAst < Math.abs(nextAst)) {
        // right is bigger, left is destroyed
        asteroids.splice(i, 1);
        // need to go back two spots to re-check for
        // a possible new interaction
        i -= 2;
        continue;
      } else {
        // left is bigger, right is destroyed
        asteroids.splice(i + 1, 1);
        // stay in same place to check for new interaction
        i--;
        continue;
      }
    }
  }
  return asteroids;
};