/**
 * 1721. Swapping Nodes in a Linked List
Medium

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
Example 3:

Input: head = [1], k = 1
Output: [1]
Example 4:

Input: head = [1,2], k = 1
Output: [2,1]
Example 5:

Input: head = [1,2,3], k = 2
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time: O(n)
 * Space: O(n)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const arr = [];
  let i = 0;
  const pointer = head;
  let startValue;
  while (head !== null) {
    if (i === k - 1) {
      startValue = head.val;
    }
    arr[i] = head;
    head = head.next;
    i++;
  }
  let lastIndex = i - k;
  const endValue = arr[lastIndex].val;
  arr[lastIndex].val = startValue;
  arr[k - 1].val = endValue;
  return pointer;
};
