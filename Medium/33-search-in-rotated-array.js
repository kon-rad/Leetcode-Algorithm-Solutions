/*
33. Search in Rotated Sorted Array
Medium

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1;
    if (!nums.length) {
        return result;
    }
    let firstAfterMid = nums[0] - 1;
    // first find the mid point
    let midIndex = pivotPoint(nums);
    // divide the array into two sections
    
    // perform binary search on the section with the target
    console.log(midIndex);
    return result;
};

const pivotPoint = (nums) => {
    const first = nums[0];
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (nums[mid] > first) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return start;
}

search([4,5,6,7,0,1,2], 6);
 