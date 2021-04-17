/**
 * 1130. Minimum Cost Tree From Leaf Values
Medium


Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

 

Example 1:

Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
 

Constraints:

2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than 2^31).
 */
var mctFromLeafValues = function (arr) {
  let sum = 0;
  // in each iteration reduce the array by one item
  // the one item will be one of two, that produce the minimum product possible
  // for the entire length of the array
  // this way it is guaranteed to always result in the smallest total product
  while (arr.length !== 1) {
    let min = Number.MAX_SAFE_INTEGER;
    let pairIndex = 0;
    // go from start of array to one before last
    for (let i = 0; i < arr.length - 1; i++) {
      let product = arr[i] * arr[i + 1];
      // find the smallest product in the entire array
      // assign the index to 'pairIndex'
      if (product < min) {
        min = product;
        pairIndex = i;
      }
    }
    sum += min;
    // find the maximum of the pair
    const maxInPair = Math.max(arr[pairIndex], arr[pairIndex + 1]);
    // remove the smaller of the two, in order to keep the condition
    // that the value of each non-leaf node is the product of the largest leaf values
    // in left and right branches
    arr.splice(pairIndex, 2, maxInPair);
  }
  return sum;
};

const arr = [6, 2, 4];

console.log(mctFromLeafValues(arr));
