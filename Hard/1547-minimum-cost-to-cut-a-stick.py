from typing import List
import sys

class Solution:
  def minCost(self, n: int, cuts: List[int]) -> int:
    def dp(start, end):
      print('start: ', start, 'end: ', end)
      if (start, end) in memo:
        return memo[(start, end)]

      ans = sys.maxsize
      canCut = False
      print('cuts: ', cuts)
      for cut in cuts:
        if start < cut < end:
          canCut = True 
          ans = min(ans, dp(start, cut) + dp(cut, end) + end - start)
      if not canCut:
        return 0

      memo[(start, end)] = ans

      return ans
    memo = {}
    return dp(0, n)

sol = Solution()
ans = sol.minCost(7, [1, 3, 4, 5])
print(ans)