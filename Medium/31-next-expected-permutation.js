/**
31. Next Permutation
Medium

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

Accepted
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    if (len < 2) {
        return;
    }
    let i = len - 1;
    // loop over nums from the end
    // find two neighbors where first one is less than second
    // break out of loop there
    while (i > 0) {
        if (nums[i - 1] < nums[i]) {
            break;
        }
        i--;
    }
    // if the entire array is in order from greatest to least
    // then simply reverse it and return;
    if (i === 0) {
        return reverseSort(nums, 0, len - 1);
    }
    
    // this is the first item that is smaller
    let val = nums[i - 1];
    // j is the last item in array
    let j = len - 1;
    // while the index of j is greater than or equal to index i
    while (j >= i) {
        // if the next item moving left from the end
        // is greater than val, or the first item that is smaller
        // then break;
        if (nums[j] > val) {
            break;
        }
        j--;
    }
    swap(nums, j, i - 1);
    return reverseSort(nums, i, len - 1);
};

const swap = function (nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

const reverseSort = function(nums, start, end) {
    if (start > end) {
        return nums;
    }
    for (let i = start; i <= (end + start) / 2; i++) {
        swap(nums, i, start + end - i);
    }
    return nums;
}