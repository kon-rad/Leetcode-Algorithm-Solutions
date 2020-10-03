/**
 * 941. Valid Mountain Array
Easy

Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]


 

Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
 

Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000 
 */

 /**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let ans = true;
  let decreasing = false;
  const len = A.length;
  if (len < 3) {
    return false;
  }
  for (let i = 1; i < len; i++) {
    if (A[i] === A[i - 1]) {
      ans = false;
      break;
    }
    if (!decreasing) {
      if (A[i - 1] > A[i]) {
        if (i === 1) {
          ans = false;
          break;
        }
        decreasing = true;
        continue;
      }
    } else {
      if (A[i - 1] <= A[i]) {
        ans = false;
        break;
      }
    }
  }
  return ans && decreasing;
};