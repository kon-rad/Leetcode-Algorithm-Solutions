'''

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

'''

class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        openb = {'[':0, '{':0, '(':0}
        lo = []
        bmap = {']':'[', '}':'{', ')':'('}
        for i in range(0, len(s)):
            if s[i] in openb:
                openb[s[i]] += 1
                lo.append(s[i])
            elif lo != [] and lo[-1] == bmap[s[i]]:
                lo.pop()
                openb[bmap[s[i]]] -= 1
            else:
                return False
        for key, value in openb.items():
            if value != 0:
                return False

        return True