/**
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
      return false;
  }
  if (root.left === null && root.right === null) {
      return root.val === sum;
  }
  return calculateSum(root.left, root.val, sum) || calculateSum(root.right, root.val, sum);
};

function calculateSum(node, val, sum) {
  if (!node) {
    return false;
  }
  if (node.left === null && node.right === null) {
      return (node.val + val) === sum;
  }
  if (node.left === null) {
      return calculateSum(node.right, val + node.val, sum);
  }
  if (node.right === null) {
      return calculateSum(node.left, val + node.val, sum);
  }
  return calculateSum(node.left, val + node.val, sum) || calculateSum(node.right, val + node.val, sum);
}