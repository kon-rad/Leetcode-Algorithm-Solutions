/**
 * 832. Flipping an Image
Easy

717

142

Add to List

Share
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Notes:

1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1
 */


const flip = a => a === 1 ? 0 : 1;
/**
 * Time Complexity is O(N/2)
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let j = 0; j < A.length; j++) {
        const a = A[j];
        let len = a.length;
        let mid = Math.floor(len / 2);
        let i = 0;
        for (i; i < mid; i++) {
            let k1 = A[j][i];
            let k2 = A[j][len - i - 1];
            A[j][i] = flip(k2);
            A[j][len - i - 1] = flip(k1);
        }
        if (len % 2 === 1) {
            A[j][i] = flip(A[j][i]) 
        }
    }
    return A;
};

/**
 * O(N)
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(a => a.reverse().map(e => e === 1 ? 0 : 1));
};