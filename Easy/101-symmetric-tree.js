/**
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {x
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
  return check(root, root);
};

const check = (left, right) => {
  if (left === null) {
      return right === null;
  }
  
  if (right === null) {
      return false;
  }
  
  if (left.val !== right.val) {
      return false;
  }
  
  return check(left.left, right.right) && check(left.right, right.left);
}