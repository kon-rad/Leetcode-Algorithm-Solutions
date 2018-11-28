/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.


 For example, the following two linked lists:

 A:          a1 → a2
 ↘
 c1 → c2 → c3
 ↗
 B:     b1 → b2 → b3
 begin to intersect at node c1.


 Notes:

 If the two linked lists have no intersection at all, return null.
 The linked lists must retain their original structure after the function returns.
 You may assume there are no cycles anywhere in the entire linked structure.
 Your code should preferably run in O(n) time and use only O(1) memory.
 Credits:
 Special thanks to @stellari for adding this problem and creating all test cases.
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let hA = headA;
  let hB = headB;

  while (hA !== hB) {
    hA = hA.next;
    hB = hB.next;
    if (hA === hB) {
      return hA;
    }
    if (!hA) hA = headB;
    if (!hB) hB = headA;
  }
  return hA;
};