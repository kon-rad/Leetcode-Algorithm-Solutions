# 46. Permutations
# Given a collection of distinct numbers, return all possible permutations.

# For example,
# [1,2,3] have the following permutations:
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]

class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        size = len(nums)
        return self.permuteRec(nums, size, result)
        
    def permuteRec(self, nums, n, result):
        if n == 1:
          copy = nums[:]
          result.append(copy)
          return result
        for i in range(n):
          result = self.permuteRec(nums, n-1, n, result)
          if (n % 2 == 1):
            nums[0], nums[n-1] = nums[n-1], nums[0]
          else:
            nums[i], nums[n-1] = nums[n-1], nums[i]
        return result