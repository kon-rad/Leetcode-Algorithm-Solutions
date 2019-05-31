/**
4. Median of Two Sorted Arrays
Hard

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;

  let i1, i2;

  if (totalLength % 2 === 0) {
      i1 = (totalLength / 2) - 1;
      i2 = totalLength / 2;
  } else {
      i1 = i2 = Math.floor(totalLength / 2);
  }
  let i = 0, j = 0;
  const combinedArr = [];
  while (combinedArr.length <= i2)  {
      let n1 = i < nums1.length ? nums1[i] : Number.MAX_SAFE_INTEGER;
      let n2 = j < nums2.length ? nums2[j] : Number.MAX_SAFE_INTEGER;
      if (n1 <= n2) {
          combinedArr.push(n1);
          i++;
      } else {
          combinedArr.push(n2);
          j++;
      }
  }
  return (combinedArr[i1] + combinedArr[i2]) / 2;
};

