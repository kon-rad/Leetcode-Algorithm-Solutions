/**
 * 1104. Path In Zigzag Labelled Binary Tree
Medium

Share
In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.



Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

 

Example 1:

Input: label = 14
Output: [1,3,4,14]
Example 2:

Input: label = 26
Output: [1,2,6,10,26]
 

Constraints:

1 <= label <= 10^6
 */
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  console.log(label);
  let i = 1;
  let levels = [];
  while (i < label) {
    levels.push(i);
    i *= 2;
  }
  const la = [];
  let c = 0;
  levels.forEach(l => {
    let na = new Array(l).fill(1);
    la.push(na.map(e => {
      e += c;
      c++;
      return e;
    }));
  });
  // if row is even, labels go from right to left
  // if row is odd, labels go from left to right
  // 15 - 12 = 3
  // 8 + 3 = 11
  // Math.floor(11/2) = 5
  return la;
};

pathInZigZagTree(14);

