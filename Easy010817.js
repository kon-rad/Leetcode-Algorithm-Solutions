/**
 * Completed 010917
 * Easy 
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
      for(var j = 0; j < nums.length; j++) {
        if(i != j && (nums[i] + nums[j]) == target) {

          return [i, j];
        }
      }
    }
};

twoSum([2, 7, 11, 15], 9)

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
