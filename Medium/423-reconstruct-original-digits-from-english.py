'''


Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.
Example 1:
Input: "owoztneoer"

Output: "012"
Example 2:
Input: "fviefuro"

Output: "45"

'''


class Solution:
    def originalDigits(self, s):
        """
        :type s: str
        :rtype: str
        """
        count = [0] * 10
        ans = ''
        for i in range(0, len(s)):
            if (s[i] == 'z'): count[0] += 1
            if (s[i] == 'w'): count[2] += 1
            if (s[i] == 'u'): count[4] += 1
            if (s[i] == 'x'): count[6] += 1
            if (s[i] == 'g'): count[8] += 1
            if (s[i] == 'f'): count[5] += 1
            if (s[i] == 'o'): count[1] += 1
            if (s[i] == 'h'): count[3] += 1
            if (s[i] == 'v'): count[7] += 1
            if (s[i] == 'n'): count[9] += 1
        count[5] = count[5] - count[4]
        count[1] = count[1] - count[0] - count[2] - count[4]
        count[3] = count[3] - count[8]
        count[7] = count[7] - count[5]
        count[9] = int((count[9] - count[7] - count[1])/2)
        for j in range(0, 10):
            for k in range(0, count[j]):
                ans += str(j)

        return ans