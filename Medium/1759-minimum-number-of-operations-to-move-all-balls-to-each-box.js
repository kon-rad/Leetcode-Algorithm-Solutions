/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
Medium

You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

 

Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
Example 2:

Input: boxes = "001011"
Output: [11,8,5,4,3,4]
 

Constraints:

n == boxes.length
1 <= n <= 2000
boxes[i] is either '0' or '1'.
 */

/**
 * Time: O(n) - go over lenght of boxes 3 times
 * Space: O(n) - create five arrays of length of boxes array
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const len = boxes.length;
  const opsFromEnd = new Array(len).fill(0);
  const boxesFromEnd = new Array(len).fill(0);
  boxesFromEnd[len - 1] = boxes[len - 1] === '1' ? 1 : 0;
  let currentOps = 0;
  // calculate all boxes and moves from the end
  for (let i = len - 2; i >= 0; i--) {
      opsFromEnd[i] = currentOps + boxesFromEnd[i + 1];
      currentOps = opsFromEnd[i];
      boxesFromEnd[i] = (boxes[i] === '1' ? 1 : 0) + boxesFromEnd[i + 1];
  }
  
  // calculate all boxes and moves from the start
  const opsFromStart = new Array(len).fill(0);
  const boxesFromStart = new Array(len).fill(0);
  boxesFromStart[0] = boxes[0] === '1' ? 1 : 0;
  currentOps = 0;
  for (let i = 1; i < len; i++) {
      opsFromStart[i] = currentOps + boxesFromStart[i - 1];
      currentOps = opsFromStart[i];
      boxesFromStart[i] = (boxes[i] === '1' ? 1 : 0) + boxesFromStart[i - 1];
  }
  const output = new Array(len);
  for (let i = 0; i < len; i++) {
      output[i] = opsFromEnd[i] + opsFromStart[i];
  }
  return output;
};