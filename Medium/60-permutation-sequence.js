/**
 * 
60. Permutation Sequence
Medium

The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
 */

var getPermutation = function (n, k) {
  let res = []
  let f = [1]
  let s = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let i = 1; i < n; i++) {
    console.log('i', i, 'f', f);
    f[i] = factorial(i)
  }
  --k
  for (let i = n; i >= 1; i--) {
    let j = Math.floor(k / f[i - 1])
    k %= f[i - 1]
    res += s[j]
    s.splice(j, 1)
  }
  return res
};

function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

console.log(getPermutation(6, 3));

