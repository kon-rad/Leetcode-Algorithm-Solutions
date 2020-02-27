/**
 * 
60. Permutation Sequence
Medium

The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let dummy = createNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  let len = 0;
  for (len; fast.next !== null; len++) {
      fast = fast.next;
  }
  for (let j = len - k % len; j > 0; j--) {
      slow = slow.next;
  }
  fast.next = dummy.next; // set the head at the end of the first section
  dummy.next = slow.next; // set the second section head as the new head
  slow.next = null;
  
  return dummy.next;
};
const createNode = val => {
  return {
      val,
      next: null,
  }
}
console.log(getPermutation(6, 3));

