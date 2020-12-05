/**
 * 
 * 239. Sliding Window Maximum
Hard

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length

*/

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  let [max, maxI] = getMax(nums, 0, k - 1);
  for (let i = 0; i <= nums.length - k; i++) {
      let endIndex = (i + k) - 1;
      if (maxI < i) {
        [max, maxI] = getMax(nums, i, (i + k) - 1);
      } else if (max < nums[endIndex]) {
        max = nums[endIndex];
        maxI = endIndex;
      }
      result.push(max);
  }
  return result;
};

const getMax = (nums, start, end) => {
  let max = nums[start];
  let maxI = start;
  for (let i = start + 1; i <= end; i++) {
      if (nums[i] > max) {
          max = nums[i];
          maxI = i;
      }
  }
  return [max, maxI];
}

/**
 * Time: O(n) In worst case it's O(n * K) when K == nums.length, on average K is less than nums.length
 * Space: O(K) Creating the slidingWindow of K length, O(n) for the result array
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow2 = function(nums, k) {
  const result = [];
  const slidingWindow = [];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    while (slidingWindow.length > 0 && cur > slidingWindow[slidingWindow.length - 1]) {
      slidingWindow.pop();
    }
    slidingWindow.push(cur);
    if (i >= (k - 1)) {
      result.push(slidingWindow[0]);
      if (slidingWindow[0] === nums[i - (k - 1)]) {
        slidingWindow.shift();
      }
    }
  }
  return result;
};
let nums = [1,3,1,2,0,5], k = 3;
// [3,3,2,5]
console.log(maxSlidingWindow(nums, k));