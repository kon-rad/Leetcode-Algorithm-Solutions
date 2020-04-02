/**
 * 461. Hamming Distance
Easy

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 */


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xStr = x.toString(2).padStart(32, '0');
  let yStr = y.toString(2).padStart(32, '0');
  let ans = 0;
  for (let i = 0; i < 32; i++) {
      if (xStr[i] !== yStr[i]) ans++;
  }
  return ans;
};