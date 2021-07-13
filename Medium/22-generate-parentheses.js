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
var generateParenthesis = function (n) {
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
    recursiveGenerateParentheses(string + '(', result, open - 1, closed);
  }
  if (closed > 0) {
    recursiveGenerateParentheses(string + ')', result, open, closed - 1);
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function (n) {
  if (n === 0) {
    return '';
  }
  return genRec(n - 1, ['()']);
};

const genRec = (n, comb) => {
  if (n === 0) {
    return comb;
  }
  const newComb = [];
  const seen = {};
  comb.forEach((item) => {
    const op1 = item + '()';
    const op2 = '()' + item;
    const op3 = `(${item})`;
    if (!seen[op1]) {
      newComb.push(op1);
      seen[op1] = true;
    }
    if (!seen[op2]) {
      newComb.push(op2);
      seen[op2] = true;
    }
    if (!seen[op3]) {
      newComb.push(op3);
      seen[op3] = true;
    }
  });
  return genRec(n - 1, newComb);
};
