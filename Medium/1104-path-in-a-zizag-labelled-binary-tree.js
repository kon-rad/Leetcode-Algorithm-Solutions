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
  let i = 1;
  const result = [];
  const levels = [];
  while (i <= label) {
    levels.push(i);
    i *= 2;
  }
  const finalLevels = [];
  let c = 0;
  levels.forEach((l, i) => {
    const newLevel = new Array(l).fill(1).map(e => {
      e += c;
      c++;
      return e;
    });
    if ((i + 1) % 2 === 0) {
      finalLevels.push(newLevel.reverse());
    } else {
      finalLevels.push(newLevel);
    }
  });
  let curLabel = label;
  result.unshift(curLabel);
  // the main insight is that if the even rows were not reversed, one could find
  // the path to the root by getting the next node with the formula Math.floor(node / 2) 
  // next to find the node in a reversed row, get the distance from the start, 
  // then get the node at that position from the end of the array
  for (let i = finalLevels.length - 1; i > 0; i--) {
    let isReversed = ((i + 1) % 2 === 0) ? true : false;
    // nextLabel is the next label to be added to results array
    let nextLabel;

    // if row is even, labels go from right to left
    if (isReversed) {
      let firstLabel = finalLevels[i][0];
      let diffFromFirst = firstLabel - curLabel;
      let lastLabel = finalLevels[i][finalLevels[i].length - 1];
      let pos = lastLabel + diffFromFirst;
      nextLabel = Math.floor(pos / 2);
    } else {
      // if row is odd, labels go from left to right
      nextLabel = Math.floor(curLabel / 2);
      let nextLevel = finalLevels[i - 1];
      let firstItemInNextLevel = nextLevel[nextLevel.length - 1];
      let diff = nextLabel - firstItemInNextLevel;
      nextLabel = finalLevels[i - 1][diff];
    }
    result.unshift(nextLabel);
    curLabel = nextLabel;
  }
  return result;
};

// 16 [1,3,4,15,16]
console.log(pathInZigZagTree(16));


