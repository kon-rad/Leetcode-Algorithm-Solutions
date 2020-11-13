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
  const finalLevels = [];
  let c = 0;
  levels.forEach((l, i) => {
    let newLevel = new Array(l).fill(1);
    const val = newLevel.map(e => {
      e += c;
      c++;
      return e;
    });
    if ((i + 1) % 2 === 0) {
      finalLevels.push(val.reverse());
    } else {
      finalLevels.push(val);
    }
  });
  let cur = label;
  for (let i = finalLevels.length - 1; i >= 0; i--) {
    let isReversed = false;
    if ((i + 1) % 2 === 0) isReversed = true;
    if (isReversed) {
      let first = finalLevels[i][0];
      let diffFromFirst = first - cur;
      let last = finalLevels[i][finalLevels[i].length - 1];
      let pos = last + diff;
      let nextCur = Math.floor(pos / 2);
    }
  }
  // if row is even, labels go from right to left
  // if row is odd, labels go from left to right
  // 15 - 12 = 3
  // 8 + 3 = 11
  // Math.floor(11/2) = 5
  return finalLevels;
};

pathInZigZagTree(14);

