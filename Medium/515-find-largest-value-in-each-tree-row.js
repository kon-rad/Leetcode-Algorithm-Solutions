/**
 * 515. Find Largest Value in Each Tree Row
Medium

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:

Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,null,2]
Output: [1,2]
Example 5:

Input: root = []
Output: []
 */

/* code for setting up test cases */
function TreeNode(val, left, right) {
  const node = {}
  node.val = (val===undefined ? 0 : val)
  node.left = (left===undefined ? null : left)
  node.right = (right===undefined ? null : right)
  return node;
}


const r = TreeNode(0, null, null);
r.right = TreeNode(-1, null, null);
r.left = TreeNode(2, null, null);
rLevel2 = r.right;
lLevel2 = r.left;
rLevel2.right = TreeNode(5, null, null);
rLevel2.left = TreeNode(3, null, null);
lLevel2.left = TreeNode(9, null, null);


const printTree = r => {
if (!r) return
if (r.val) console.log(r.val);
printTree(r.right);
printTree(r.left);
}
/* end test code */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  const res = [];
  const dict = {};
  let level = 0;
  if (!root || root.val === undefined) {
      return res;
  }
  getValsRec(root, level + 1, dict);
  Object.keys(dict).forEach(l => {
    let levelMax = dict[l][0];
    dict[l].forEach(n => {
      if (n > levelMax) levelMax = n;
    });
    res.push(levelMax);
  });
  return res;
};

const getValsRec = (node, level, dict) => {
if (!node) return;
if (!dict.hasOwnProperty(level)) {
  dict[level] = [];
}
dict[level].push(node.val);
getValsRec(node.right, level + 1, dict);
getValsRec(node.left, level + 1, dict);
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
      let levelLenght = queue.length;
      let max = -Infinity;
      
      for (let i = 0; i < levelLenght; i++) {
          let node = queue.pop();
          max = Math.max(node.val, max);
          if (node.left) queue.unshift(node.left);
          if (node.right) queue.unshift(node.right);
          
      }
      res.push(max);
  }
  return res;
};
