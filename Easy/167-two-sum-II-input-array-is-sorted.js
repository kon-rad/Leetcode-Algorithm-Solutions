/**
 * 
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0, j = numbers.length - 1; i < j; ) {
        // start with one pointer at begining and one at end - notice for loop no chagne statement
        let sum = numbers[i] + numbers[j];
        // if the sum equals target success!
        if (sum === target) {
            return new Array(i + 1, j + 1);
        } else if (sum < target) {
            // if sum < target increment lower end pointer
            i++;
        } else {
            // sum is > target, move right pointer to left
            j--;
        }
        // continue this way, narrowing down to solution
    }
};