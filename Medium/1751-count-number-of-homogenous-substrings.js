/**
 * 
 * 
 * 1759. Count Number of Homogenous Substrings
Medium

Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.

A string is homogenous if all the characters of the string are the same.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "abbcccaa"
Output: 13
Explanation: The homogenous substrings are listed as below:
"a"   appears 3 times.
"aa"  appears 1 time.
"b"   appears 2 times.
"bb"  appears 1 time.
"c"   appears 3 times.
"cc"  appears 2 times.
"ccc" appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.
Example 2:

Input: s = "xy"
Output: 2
Explanation: The homogenous substrings are "x" and "y".
Example 3:

Input: s = "zzzzz"
Output: 15
 

Constraints:

1 <= s.length <= 105
s consists of lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countHomogenous = function (s) {
  const dict = {};
  let startIndex = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (i === 0) {
      dict[`${startIndex}-${s[i]}`] = 1;
      continue;
    }

    if (s[i] === s[i - 1]) {
      dict[`${startIndex}-${s[i]}`] += 1;
    } else {
      startIndex = i;
      dict[`${startIndex}-${s[i]}`] = 1;
    }
  }
  let count = 0;
  for (let key of Object.keys(dict)) {
    if (dict[key] === 1) {
      count += 1;
      continue;
    }
    count += getNumberOfSubstrings(dict[key]);
  }
  return count % (Math.pow(10, 9) + 7);
};

const getNumberOfSubstrings = (lengthOfSubstring) => {
  let currentLength = 1;
  let sum = 0;
  while (currentLength <= lengthOfSubstring) {
    sum += 1 + (lengthOfSubstring - currentLength);
    currentLength++;
  }
  return sum;
};

/**
"zzzzz"

z 5
5 / 1 = 5
5 - 1 = 4
1 + 4 = 5


zz 4
5 / 2 = 2.5
5 - 2 = 3
3 + 1 = 4


zzz 3
5 / 3 = 1.66
5 - 3 = 2
1 + 2 = 3


zzzz 2
5 / 4 = 1.25
5 - 4 = 1
1 + 1 = 2


zzzzz 1
5 / 5 = 1
5 - 5 = 0
1 + 0 = 1


*/
