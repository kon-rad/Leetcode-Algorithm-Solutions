/**
 19. Remove Nth Node From End of List
 Medium

 Given a linked list, remove the n-th node from the end of list and return its head.

 Example:

 Given linked list: 1->2->3->4->5, and n = 2.

 After removing the second node from the end, the linked list becomes 1->2->3->5.
 Note:

 Given n will always be valid.

 Follow up:

 Could you do this in one pass?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Solution inspired from leetcode article
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head === null || (head.next === null && n === 1)) {
    return null;
  }
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // advance first pointer, to create gap of n
  for (let i = 1; i<=n+1; i++) {
    first = first.next;
  }
  // move first to the end, maintaining the gap
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Original solution 6/15/2019
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let index = 0;
  const map = {};
  while (head) {
    map[index] = head;
    head = head.next;
    index++;
  }

  let nodeToDelete = index - n;
  if (nodeToDelete === 0) {
    return map[0].next;
  }

  map[nodeToDelete - 1].next = map[nodeToDelete].next;
  return map[0]
};
