/**

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */

 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // create a new set - an array of unique words
  const dict = new Set(wordDict);
  const cache = {};

  const helper = s => {
      if (!s.length) return true;
      // check chache if str already checked
      if (cache[s] !== undefined) return cache[s];
      for (let i = 1; i<=s.length; i++) {
          const word = s.slice(0, i);
          // for each substring, starting from 0 to i
          // check if exists in dictionary
          if (dict.has(word)) {
              // if string exists in dictionary
              // get new substring from what remains
              const substr = s.slice(i);

              if (helper(substr)) {
                  // check if remaining string exists in dict, or any combination of
                  // it's substrings, with a recursive call to 'helper'
                  cache[s] = true;
                  // if it exists, return true to call to helper
                  return true;
              }
          }
      }

      cache[s] = false;
      return false;
  }

  return helper(s);
};