/**
 * 538. Convert BST to Greater Tree

 Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0; 
  getSumRecursive(root, sum);
  return root;
};

const getSumRecursive = (root, sum) => {
  if (!root) return sum;
  
  const right = getSumRecursive(root.right, sum);
  
  sum = root.val + right;
  root.val = sum;
  
  const left = getSumRecursive(root.left, sum);
  
  return left;
}