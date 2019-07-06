/**
30. Substring with Concatenation of All Words
Hard

You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: []
 */



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const res = [];
  if (words.length < 1) {
      return res;
  }
  const wordLen = words[0].length;
  const len = s.length;
  const totalLen = wordLen * words.length;
  const wordDict = createDict(words);
  for (let i = 0; i < len - totalLen + 1; i++) {
      const currentDict = {};
      for(let j = i; j < i + totalLen; j += wordLen) {
          let substr = s.slice(j, j+wordLen);
          if (substr in wordDict) {
              if (substr in currentDict) {
                  currentDict[substr]++;
                  if (currentDict[substr] > wordDict[substr]) {
                      break;
                  }
              } else {
                  currentDict[substr] = 1;
              }
          }
      }
      if (objectsAreTheSame(currentDict, wordDict)) {
          res.push(i);
      }
  }
  return res;
};

const createDict = (words) => {
  const dict = {};
  words.forEach(w => {
      if (w in dict) {
          dict[w]++;
      } else {
          dict[w] = 1;
      }
  });
  return dict;
}
const objectsAreTheSame = (obj1, obj2) => {
  let obj1Len = 0;
  let obj2Len = 0;
  for (let p in obj1) {
      obj1Len++;
      if (p in obj2 && obj1[p] === obj2[p]) {
          continue;
      }
      return false;
  }
  for (let m in obj2) {
      obj2Len++;
      if (m in obj1 && obj2[m] === obj1[m]) {
          continue;
      }
      return false;
  }
  return obj1Len === obj2Len;
}