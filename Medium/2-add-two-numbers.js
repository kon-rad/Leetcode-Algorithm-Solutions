/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) {
      return null
  }
  let sum = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0)
  let ans = new ListNode(sum % 10);
  let remainder = Math.floor(sum / 10);
  let res = ans;
  l1 = l1 === null ? null : l1.next;
  l2 = l2 === null ? null : l2.next;
  while (l1 !== null || l2 !== null || remainder !== 0) {
      sum = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0) + remainder;
      ans.next = new ListNode(sum % 10);
      ans = ans.next;
      remainder = Math.floor(sum / 10);
      l1 = l1 === null ? null : l1.next;
      l2 = l2 === null ? null : l2.next;
  }
  return res;
};