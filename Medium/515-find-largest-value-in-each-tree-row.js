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


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  return this;
}

let input = [1,3,2,5,3,null,9];

const r = TreeNode(1, null, null);
console.log(r.right);
const rootPointerL = TreeNode(null, r, null);
r.right = TreeNode(3, null, null);
r.left = TreeNode(2, null, null);
rLevel2 = r.right;
lLevel2 = r.left;
// rLevel2.right = TreeNode(5, null, null);
// rLevel2.left = TreeNode(3, null, null);
// lLevel2.left = TreeNode(9, null, null);


const printTree = r => {
if (!r) return
if (r.val) console.log(r.val);
printTree(r.right);
printTree(r.left);
}
printTree(rootPointerL)
/**
Definition for a binary tree node.
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
  if (!root || root.val === undefined) {
      return res;
  }
  res.push(root.val);
};

const getValsRec = (root, res, i) => {
  
}






