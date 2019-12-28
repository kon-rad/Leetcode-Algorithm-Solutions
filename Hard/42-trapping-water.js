/**
42. Trapping Rain Water
Hard

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

/**
 * Inefficient solution. Time complexity O(n^2)
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length;
  let vol = 0;
  for (let i = 0; i < len; i++) {
      let leftMax = 0;
      for (let j = 0; j < i; j++) {
          leftMax = leftMax > height[j] ? leftMax : height[j];
      }
      let rightMax = 0;
      for (let j = i + 1; j < len; j++) {
          rightMax = rightMax > height[j] ? rightMax : height[j];
      }
      let diff = Math.min(leftMax, rightMax) - height[i];
      vol += diff > 0 ? diff : 0;
  }
  return vol;
};

/**
 * Better solution. O(n) time, O(n) auxiliry space. First create two arrays of left and right max heights. Like in above 
 * solution, then iterate over each item and calculate water using the max heights from arrays.
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length;
  let vol = 0;
  const leftMax = [height[0]];
  const rightMax = [];
  rightMax[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = len - 2; i > 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  for (let i = 0; i < len; i++) {
      let diff = Math.min(leftMax[i], rightMax[i]) - height[i];
      vol += diff > 0 ? diff : 0;
  }
  return vol;
};

/**
 * Best soluition. Space optimization of above. O(n) time O(1) space
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length;
  let vol = 0;
  let lm = 0;
  let rm = 0;
  let l = 0, r = len - 1;
  while (l <= r) {
      if (lm <= rm) {
          if (lm < height[l]) {
              lm = height[l];
          } else {
              vol += lm - height[l] > 0 ? lm - height[l] : 0;
          }
          l++;
      } else {
          if (rm < height[r]) {
              rm = height[r];
          } else {
              vol += rm - height[r] > 0 ? rm - height[r] : 0;
          }
          r--;
      }
  }
  return vol;
};
