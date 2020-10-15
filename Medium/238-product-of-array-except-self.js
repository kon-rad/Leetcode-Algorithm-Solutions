/**
 * 238. Product of Array Except Self
Medium

5751

468

Add to List

Share
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = A => {
  let l = [...A];
  let r = [...A];
  const len = A.length

  for (let i = 1; i < len; i++) {
    l[i] *= l[i-1];
  }
  for (let i = len - 2; i > 0; i--) {
    r[i] *= r[i+1];
  }
  return A.map((_, i) => {
    let prod = 1;
    if (i > 0) prod *= l[i-1];
    if (i < len - 1) prod *= r[i+1];
    return prod;
  })
};
