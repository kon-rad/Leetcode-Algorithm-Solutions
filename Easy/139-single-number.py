'''

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

'''

#hash table
class Solution:
	def singleNumber(self, nums):
		"""
		:type nums: List[int]
		:rtype: int
		"""
		s = {}
		for x in nums:
			if x in s:
				del s[x]
			else:
				s[x] = 'true'
		return list(s.keys())[0]

#XOR
class Solution:
	def singleNumber(self, nums):
		"""
		:type nums: List[int]
		:rtype: int
		"""
		sumof = 0
		i = 0
		while i < len(nums):
			sumof = sumof^nums[i]
			print(sumof)
			i = i+1

		return sumof