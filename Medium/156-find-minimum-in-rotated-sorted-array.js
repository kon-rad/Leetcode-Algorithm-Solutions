/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // time n log n
  // this uses a binary search algorithm
  // start and end indexes move closer around the minimum point
  // target is set as the last item in array
  // when mid is less than target, this means that minimum is in the first half - make mid the new end
  // otherwise, the minimum is in the second half, make mid the new start
  // when start and end are next to each other, exit while loop
  // return the minimum, this is the lower one of the start/end, and it's less than the target
  let l = nums.length;
  let start = 0;
  let end = l -1;
  let target = nums[l -1];
  let mid;
  while(start + 1 < end) {
      mid = start + Math.floor((end-start) /2);
      if(nums[mid] < target) {
          end = mid;
      } else {
          start = mid;
      }
  }
  return nums[start] < target ? nums[start] : nums[end];
};