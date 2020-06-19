/**
 * 344. Reverse String
 Easy

 Write a function that reverses a string. The input string is given as an array of characters char[].

 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

 You may assume all the characters consist of printable ascii characters.



 Example 1:

 Input: ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]
 Example 2:

 Input: ["H","a","n","n","a","h"]
 Output: ["h","a","n","n","a","H"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length, tmp, mid = Math.floor(l / 2);
    for (let i = 0; i<mid; i++) {
        tmp = s[i];
        s[i] = s[l - i - 1];
        s[l - i - 1] = tmp;
    }
    return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length;
    for(let i = 0, j = len -1; i < Math.floor(len / 2); j--, i++) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s;
};