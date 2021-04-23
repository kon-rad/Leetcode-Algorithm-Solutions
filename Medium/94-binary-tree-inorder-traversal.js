/**
 * 94. Binary Tree Inorder Traversal
Medium

Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up:

Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive solution
 * Time: O(n)
 * Space: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const output = [];
  recInorder(root, output);
  return output;
};

const recInorder = (root, output) => {
  if (!root) {
    return;
  }
  if (root.left) {
    recInorder(root.left, output);
  }
  output.push(root.val);
  if (root.right) {
    return recInorder(root.right, output);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Iterative solution
 * Time: O(n)
 * Space: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const output = [];
  let cur = root;
  let searching = true;
  const queue = [];
  while (searching) {
    if (!cur) {
      if (queue.length === 0) {
        searching = false;
        break;
      } else {
        cur = queue.pop();
      }
    } else if (cur.left) {
      let copyCur = cur;
      cur = cur.left;
      copyCur.left = null;
      queue.push(copyCur);
    } else {
      output.push(cur.val);
      if (cur.right) {
        cur = cur.right;
      } else {
        cur = null;
      }
    }
  }
  return output;
};
