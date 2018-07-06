'''

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

'''

class Solution:
    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s == s[::-1]: return True
        r = s[::-1]
        i, j = 0, len(s)
        while i < j:
            if s[i] != r[i]:
                a = s[:i] + s[i+1:]
                ar = r[:i] + r[i+1:]
                return a == a[::-1] or ar == ar[::-1]
            i, j = i+1, j-1
        return False
