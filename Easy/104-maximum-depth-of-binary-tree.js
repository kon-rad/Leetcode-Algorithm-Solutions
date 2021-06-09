/**
 * 104. Maximum Depth of Binary Tree
Easy

Share
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
 * @return {number}
 */
var maxDepth1 = function (root) {
  return recCount(root, 0);
};

const recCount = (root, count) => {
  if (!root) return count;
  if (!root.left && !root.right) return count + 1;
  if (!root.left) return recCount(root.right, count + 1);
  if (!root.right) return recCount(root.left, count + 1);
  let lr = recCount(root.left, count + 1);
  let rr = recCount(root.right, count + 1);
  return lr > rr ? lr : rr;
};

/**
 * Time: O(n)
 * Space: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, max = 0) {
  if (!root) {
    return max;
  }
  let left = 0,
    right = 0;
  left = maxDepth(root.left, max + 1);
  right = maxDepth(root.right, max + 1);
  return Math.max(left, right);
};
