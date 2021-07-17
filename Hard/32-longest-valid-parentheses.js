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
var longestValidParentheses2 = function(s) {
    const len = s.length;
    let open, close, substringLen, longest = 0;
    if (len <= 1) {
        return 0;
    }
    for (let i = 0; i < len - 1; i++) {
        // exit early if a longer substring than current is not possible
        if (longest > len - i) {
            break;
        }
        // reset counts for open and close parenteses
        open = 0;
        close = 0;
        if (s[i] === '(') {
            open++;
        } else {
            // if the first character is a close parentheses, it is invalid
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            // check if current section is valid
            if (s[j] === '(') {
                open++;
            } else {
                close++;
            }
            // a parentheses is invalid when:
            // 1. here are more close brackets than open
            // 2. more open brackets than there are chars left in the string
            if (open - close < 0 || Math.abs(open - close) > len - j) {
                break;
            }
            if (open === close) {
                // get the length of the substring, add one for index offset
                substringLen = j - i + 1;
                // update longest if it has greater length
                if (substringLen > longest) {
                    longest = substringLen;
                }
            }
        }
    }
    return longest;
};

const longestValidParentheses = s => {
    let max = 0;
    const dp = new Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
        } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
            dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i -1] - 2] : 0) + 2);)
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}