/**
25. Reverse Nodes in k-Group
Hard

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Recursive solution
 * Not O(N) space
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let i = 0;
    let curr = head;
    while (i !== k && curr) {
        curr = curr.next;
        i++;
    }
    
    if (i === k) {
        curr = reverseKGroup(curr, k);
        
        while (i > 0) {
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
            i--;
        }
        head = curr;
    }
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Iterative solution
 * O(N) time
 * O(1) memory
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k < 2) {
        return head;
    }
    let len = 0;
    let p0 = head;
    while(p0) {
        p0 = p0.next;
        len++;
    }
    if (len < k) {
        return head;
    }
    
    let dummy = new ListNode(0);
    dummy.next = head;
    p0 = dummy;
    let p1 = dummy.next;
    for (let i = 0; i < Math.floor(len / k); i++) {
        for (let j = 0; j < (k - 1); j++) {
            let tmp = p1.next;
            p1.next = tmp.next;
            tmp.next = p0.next;
            p0.next = tmp;
        }
        p0 = p1;
        p1 = p0.next;
    }
    return dummy.next;
};