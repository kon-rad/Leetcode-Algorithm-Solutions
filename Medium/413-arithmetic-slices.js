/**
 * 413. Arithmetic Slices
Medium

A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7
 
A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of the array A is called arithmetic if the sequence:
A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

 
Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 */

/**
 * Simple solution.
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let count = 0;
  let diff = A[1] - A[0];
  let result = 0;
  for (let i = 2; i < A.length; i++) {
    if (diff === A[i] - A[i - 1]) {
      count++;
      result += count;
    } else {
      diff = A[i] - A[i - 1];
      count = 0;
    }
  }
  return result;
};

/**
 * Advanced solution, calculates the combinations
 */
var numberOfArithmeticSlices = function(A) {
  var ret = 0, i, j;
  for (i = 1; i < A.length; i = j) {
      for (j = i + 1; j < A.length && A[j] - A[j - 1] == A[i] - A[i - 1]; j++);
      // add number of slices in this segment
      ret += (j - i) * (j - i - 1) / 2;
  }
  return ret;
};