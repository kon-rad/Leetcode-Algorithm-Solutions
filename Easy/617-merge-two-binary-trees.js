/**
 * 617. Merge Two Binary Trees
Easy

Share
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
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
 * Time complexity: O(n)
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	return mergeTreesRec(t1, t2);
};

/**
 * 
 * @param {*} t1 
 * @param {*} t2 
 */
const mergeTreesRec = (t1, t2) => {
	if (!t1) {
			return t2;
	}
	if (!t2) {
			return t1
	}
	t1.val += t2.val;
	t1.left = mergeTreesRec(t1.left, t2.left);
	t1.right = mergeTreesRec(t1.right, t2.right);
	return t1;
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	if (!t1 && !t2) {
			return null;
	}
	const result = new TreeNode();
	mergeRecursive(result, t1, t2);
	return result;
};

const mergeRecursive = (r, t1, t2) => {
	if (!t1 && !t2) {
			return;
	}
	r.val = (t1 && t1.val || 0) + (t2 && t2.val || 0);
	
	if (t1 && t1.left || t2 && t2.left) {
			r.left = new TreeNode();
			mergeRecursive(r.left, t1 && t1.left, t2 && t2.left);
	}
	if (t1 && t1.right || t2 && t2.right) {
			r.right = new TreeNode();
			mergeRecursive(r.right, t1 && t1.right, t2 && t2.right);
	}
}