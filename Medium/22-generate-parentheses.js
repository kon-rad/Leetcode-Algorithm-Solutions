/**
 22. Generate Parentheses
 Medium

 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:

 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  recursiveGenerateParentheses('', result, n, n);

  return result;
};

function recursiveGenerateParentheses(string, result, open, closed) {
  if (closed < open) return;
  if (open === 0 && closed === 0) {
    result.push(string);
    return;
  }
  if (open > 0) {
    recursiveGenerateParentheses(string+'(', result, open-1, closed);
  }
  if (closed > 0) {
    recursiveGenerateParentheses(string+')', result, open, closed-1);
  }
}