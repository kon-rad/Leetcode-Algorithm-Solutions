/**
11. Container With Most Water
Medium

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let current;

  while (left < right) {
      current = Math.min(height[left], height[right]) * (right - left);

      if (current > max) max = current;

      if (height[left] < height[right])
          left += 1;
      else
          right -= 1;
  }
  return max;
};