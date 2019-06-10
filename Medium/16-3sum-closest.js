/**
16. 3Sum Closest
Medium

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


'use strict';
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minVal = Number.MAX_SAFE_INTEGER;
    let minSum = null;
    let len = nums.length;
    if (len <= 2) return 0;
    let t, diff, l, r;

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 2; i++) {

        l = i+1;
        r = len-1;
        while (l < r) {
            t = (nums[i] + nums[l] + nums[r]);
            diff = Math.abs(target - t);
            if (diff < minVal) {
                minVal = diff;
                minSum = t
            }
            if (t === target) break;
            if (t < target) {
                l++;
            } else {
                r--;
            }
        }    
    }
    return minSum;
};