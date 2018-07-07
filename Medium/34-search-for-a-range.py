Cass Solution:
    def searchRange(self, nums, x):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        rightNum = len(nums)-1
        return self.searchRecursive(nums, x, 0, rightNum)
    
    def searchRecursive(self, nums, x, leftNum, rightNum):
      if leftNum > rightNum:
        return [-1, -1]
      mid = leftNum + (rightNum-leftNum) //2
      if nums[mid] == x:
        start = mid 
        while start >= 0 and nums[start] == x :
          start -= 1
        end = mid
        while end < len(nums) and nums[end] == x :
          end +=1
        return ([start+1, end-1])
      elif x < nums[mid] : 
        return self.searchRecursive(nums, x, leftNum, mid-1)
      else :
        return self.searchRecursive(nums, x, mid+1, rightNum)
