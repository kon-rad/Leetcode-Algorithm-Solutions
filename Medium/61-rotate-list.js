/**
 * 61. Rotate List
Medium

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
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
  const len = getLength(head);
  const turns = len % k;
  return turns;
};

const getLength = head => {
  let len = 0;
  while (head) {
      len++;
      head = head.next;
  }
  return len;
}
const createNode = val => {
  return {
      val,
      next: null,
  }
}
const createList = k => {
  const head = createNode(k);
  while (k > 0) {
      k--;
      head.next = createNode(k);
  }
}
let lk = createList(5);
console.log(rotateRight(lk, 14));