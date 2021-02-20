/**
 * 1754. Largest Merge Of Two Strings
Medium

You are given two strings word1 and word2. You want to construct a string merge in the following way: while either word1 or word2 are non-empty, choose one of the following options:

If word1 is non-empty, append the first character in word1 to merge and delete it from word1.
For example, if word1 = "abc" and merge = "dv", then after choosing this operation, word1 = "bc" and merge = "dva".
If word2 is non-empty, append the first character in word2 to merge and delete it from word2.
For example, if word2 = "abc" and merge = "", then after choosing this operation, word2 = "bc" and merge = "a".
Return the lexicographically largest merge you can construct.

A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b. For example, "abcd" is lexicographically larger than "abcc" because the first position they differ is at the fourth character, and d is greater than c.

 

Example 1:

Input: word1 = "cabaa", word2 = "bcaaa"
Output: "cbcabaaaaa"
Explanation: One way to get the lexicographically largest merge is:
- Take from word1: merge = "c", word1 = "abaa", word2 = "bcaaa"
- Take from word2: merge = "cb", word1 = "abaa", word2 = "caaa"
- Take from word2: merge = "cbc", word1 = "abaa", word2 = "aaa"
- Take from word1: merge = "cbca", word1 = "baa", word2 = "aaa"
- Take from word1: merge = "cbcab", word1 = "aa", word2 = "aaa"
- Append the remaining 5 a's from word1 and word2 at the end of merge.
Example 2:

Input: word1 = "abcabc", word2 = "abdcaba"
Output: "abdcabcabcaba"
 

Constraints:

1 <= word1.length, word2.length <= 3000
word1 and word2 consist only of lowercase English letters.
 */


 /**
  * WIP: not passing in one case, try doing simple loop with if else
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    
  const max = { val: '' };
  const results = {};
  recursiveLargestMerge(word1, word2, '', max, results);
  let sorted = Object.keys(results).sort((b, a) => a.localeCompare(b));
  return sorted[0];
};

const recursiveLargestMerge = (w1, w2, merge, max, results) => {
  if (w1 === '' && w2 === '') {
      results[merge] = true;
      return;
  }
  let c1 = '';
  let c2 = '';
  let mergeW1;
  let mergeW2;
  if (w1 !== '') {
      c1 = w1[0];
  }
  if (w2 !== '') {
      c2 = w2[0];
  }
  let comparison = c1.localeCompare(c2);
  if (comparison === 1) {
    mergeW1 = merge + c1;
    max.val = mergeW1;
    recursiveLargestMerge(w1.substring(1), w2, mergeW1, max, results);
  } else if (comparison === -1) {
    mergeW2 = merge + c2;
    max.val = mergeW2;
    recursiveLargestMerge(w1, w2.substring(1), mergeW2, max, results);
  } else if (comparison === 0) {
    mergeW1 = merge + c1;
    max.val = mergeW1;
    if (stringsAreHomogoneus(w1.substring(1), w2.substring(1))) {
      results[merge + w1 + w2] = true;
      return;
    }
    recursiveLargestMerge(w1.substring(1), w2, mergeW1, max, results);
    recursiveLargestMerge(w1, w2.substring(1), mergeW1, max, results);
  }
}
const stringsAreHomogoneus = (w1, w2) => {
let result = true;
let compare = true;
let i = 0, j = 0;
let len1 = w1.length, len2 = w2.length;
while (i < len1 && j < len2) {
  if (w1[i] !== w2[j]) {
    result = false;
    compare = false;
    break;
  }
  if (i < len1) i++;
  if (j < len2) j++;
}
return result;
}