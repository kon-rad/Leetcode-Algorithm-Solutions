/**
32. Longest Valid Parentheses
Hard

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
 */

 /**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let open = 0, close = 0, len = s.length;
    let longest = 0;
    for (let i = 0; i < len - 1; i++) {
        open = 0;
        close = 0;
        if (s[i] === '(') {
            open++;
        } else {
            close++;
        }
        for (let j = i + 1; j < len; j++) {
            // check if current section is valid
            
            if (Math.abs(open - close) > len - j) {
                break;
            }
            if (open === close) {
                
            }
        }
    }
};