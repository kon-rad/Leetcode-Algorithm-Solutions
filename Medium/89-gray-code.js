/**
 * 89. Gray Code
Medium

The gray code is a binary numeral system where two successive values differ in only one bit.

Given an integer n representing the total number of bits in the code, return any sequence of gray code.

A gray code sequence must begin with 0.

 

Example 1:

Input: n = 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2
[0,2,3,1] is also a valid gray code sequence.
00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: n = 1
Output: [0,1]
 
n = 4

00 - 0
01 - 1
11 - 3
10 - 2

00 - 0
01 - 1
11 - 3
10 - 2

100 - 0

Constraints:

1 <= n <= 16
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n <= 0) {
    return [];
  }
  const result = grayCodeRec(n);
  return result.map((bi) => parseInt(bi, 2));
};

const grayCodeRec = (n) => {
  const res = [];
  if (n === 1) {
    return ['0', '1'];
  }

  const last = grayCodeRec(n - 1);

  for (let i = last.length - 1; i >= 0; i--) {
    res.unshift('0' + last[i]);
    res.push('1' + last[i]);
  }

  return res;
};

console.log(grayCode(2));
