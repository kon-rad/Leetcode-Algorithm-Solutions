/**
24. Swap Nodes in Pairs
Medium

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Recursive O(N) solution
 * O(1) space
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
};

/**
 * Iterative O(N) solution
 * O(1) space
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode(0);
    let node = dummy;
    dummy.next = head;
    while (head && head.next) {
        let n = head.next;
        head.next = n.next;
        n.next = head;
        
        node.next = n;
        node = head;
        head = node.next;
    }
    return dummy.next;
};