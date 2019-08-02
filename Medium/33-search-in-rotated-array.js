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
    if (nums[0] === target) {
        return 0;
    }
    if (nums.length === 2) {
        if (nums[1] === target) {
            return 1;
        } else {
            return -1;
        }
    }
    let firstAfterMid = nums[0] - 1;
    let midIndex = pivotPoint(nums);
    let numsHalf, base;
    if (target < nums[0]) {
        base = midIndex;
        numsHalf = nums.slice(midIndex);
    } else {
        base = 0;
        numsHalf = nums.slice(0, midIndex);
    }
    let start = 0;
    let end = numsHalf.length - 1;
    let mid;
    console.log('midIndex', midIndex, numsHalf);
    
    while (start <= end) {
        mid = Math.floor((start + end)/2);
        console.log('mid', mid, numsHalf, numsHalf[mid], target);
        if (numsHalf[mid] === target) {
            return base + mid;
        } else if (numsHalf[mid] < target) {
            console.log('>')
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log('mid', mid, numsHalf, numsHalf[mid], target);

    if (numsHalf[mid] !== target) {
        return -1;
    }
    console.log('post', base, mid, start, end);

    return base + mid === 0 ? -1 : base + mid;
};

const pivotPoint = (nums) => {
    const first = nums[0];
    let start = 0;
    let end = nums.length - 1;
    let mid;
    
    while (start <= end) {
        mid = Math.floor((start + end)/2);
        console.log('p', mid, start, end);
        if (nums[mid] > first) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log('s', start, mid);
    if (start === 0 && nums[1] < nums[0]) {
        return 1;
    }
    return start;
}

search([8,9,2,3,4], 9);