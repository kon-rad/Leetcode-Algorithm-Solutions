/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const map = new Map();
  const twice = [];
  nums.forEach(num => {
      if (map.has(num)) {
          twice.push(num);
      } else {
          map.set(num, 1);
      }
  });
  return twice;
};

/**
 * Mutate the array
 * Since numbers in array are from 1 to less than n (it's length)
 * you can indicate that a number has already been seen by making
 * the value at the index of that item to be negative. Then if you already
 * see that it is negative, you know it's duplicate and push it to the 
 * results array.
 * Space O(n) Time O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const twice = [];
  for(let i = 0, len = nums.length; i<len; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      twice.push(Math.abs(nums[i]));
    } else {
      nums[index] = nums[index] * -1
    }
  }
  return twice;
};
