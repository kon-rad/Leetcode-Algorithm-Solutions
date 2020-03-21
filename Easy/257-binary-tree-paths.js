/**
 * 257. Binary Tree Paths
Easy

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = [];
  if (!root || !root.val) return paths;
  recPaths(root, paths, '');
  return paths;
};

const recPaths = (root, paths, cur) => {
  if (!root.left && !root.right) {
      paths.push(cur + root.val);
      return;
  }
  cur += root.val + '->';
  root.left && recPaths(root.left, paths, cur);
  root.right && recPaths(root.right, paths, cur);
}