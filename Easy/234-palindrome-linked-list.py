
'''

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

'''


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        ph = head
        al = []
        while head is not None:
            al.append(str(head.val))
            head = head.next
        ll = len(al)
        m = math.floor(ll/2)
        for i in range(0, m):
            if al[i] != al[ll-i-1]:
                return False
        return True