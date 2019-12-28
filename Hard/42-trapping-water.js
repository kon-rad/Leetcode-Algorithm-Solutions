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