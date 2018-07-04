"""
Contributor:今が最高

Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N
numbers successfully if one of the following is true for the ith position (1 <= i <= N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.
Now given N, how many beautiful arrangements can you construct?

Example 1:
Input: 2
Output: 2
Explanation:

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
Note:
N is a positive integer and will not exceed 15.

"""

#Solution by LeetCode user: lvlv

class Solution(object):
    def countArrangement(self, N):
        """
        :type N: int
        :rtype: int
        """
        self.count = 0
        self.helper([], list(range(1, N + 1)))
        return self.count

    def helper(self, used_values, rest_values):
        i = len(used_values) + 1
        if len(rest_values) == 0:
            self.count   += 1
        print(rest_values)
        for each in rest_values:
            if i % each == 0 or each % i == 0:
                used_values.append(i)
                new_rest = rest_values[:]
                new_rest.remove(each)
                self.helper(used_values, new_rest)
                used_values.pop()




solu = Solution()

print(solu.countArrangement(7))