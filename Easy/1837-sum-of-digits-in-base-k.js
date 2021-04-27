/**
 * 1837. Sum of Digits in Base K
Easy

Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

 

Example 1:

Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
Example 2:

Input: n = 10, k = 10
Output: 1
Explanation: n is already in base 10. 1 + 0 = 1.
 

Constraints:

1 <= n <= 100
2 <= k <= 10
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const resArr = [];
  let curr = n;
  let base = k;
  const baseArr = [];
  while (base <= n) {
    baseArr.push(base);
    base = base * k;
  }
  baseArr.reverse().forEach((bNum) => {
    let nextBase = Math.floor(curr / bNum);
    let mult = nextBase * bNum;
    curr = curr - mult;
    console.log(curr, nextBase, bNum);
    resArr.push(nextBase);
  });
  resArr.push(curr);
  // let res = parseInt(n, k);
  // const str = res + '';
  console.log(baseArr, resArr);
  let resN = resArr
    .join('')
    .split('')
    .reduce((acc, curr) => {
      return parseInt(curr) + acc;
    }, 0);
  return resN;
};

console.log(sumBase(5, 5));
