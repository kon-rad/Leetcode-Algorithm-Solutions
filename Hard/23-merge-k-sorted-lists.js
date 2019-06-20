/**
23. Merge k Sorted Lists
Hard

2527

164

Favorite

Share
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Time: O(N log N)
 *  - linear: one pass over each node to save in dictionary O(N) time
 *  - sorting algorithm costs O (N log N) time
 *  - second pass to build sorted linked list costs O(N) time
 * Space: O(N) - creating a new linked list
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let dummy = new ListNode(null);
    const dummyHead = dummy;
    const dict = {};
    
    lists.forEach(n => {
        while (n) {
            if (dict.hasOwnProperty(n.val)) {
               dict[n.val].push(n);
            } else {
                dict[n.val] = [n];
            }
            n = n.next;
        }
    });
    let nodeValues = Object.keys(dict);
    nodeValues.sort((a, b) => a - b);
    nodeValues.forEach(v => {
        dict[v].forEach(n => {
            dummy.next = n;
            dummy = dummy.next;
        })
    })
    
    return dummyHead.next;
}

/**
 * Time: O(N log k) where k is the number of linked lists
 * Space: O(1) - linked lists are merged in O(1) space
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return helper(lists, 0, lists.length - 1);
};

function merge (left, right) {
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else if (left.val < right.val){
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}


function helper(lists, start, end) {
    if (start === end) {
        return lists[start];
    } else if (start < end) {
        const mid = parseInt((start + end) / 2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }
    
}