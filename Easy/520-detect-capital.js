/**
 * 520. Detect Capital
Easy

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True
 

Example 2:

Input: "FlaG"
Output: False
 

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */

 /**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let isLowercase = false;
  let uppercaseCount = 0;
  let len = word.length;
  let isFirstUppercase = false;
  for (let i = 0; i < len; i++) {
      let curUp = word[i] === word[i].toUpperCase();
      if (curUp && i === 0) {
          isFirstUppercase = true;
          uppercaseCount++;
      } else if (curUp) {
          if (!isFirstUppercase) {
              return false;
          }
          uppercaseCount++;
      } else {
          if (uppercaseCount > 1 && isFirstUppercase) {
              return false;
          }
      }
  }
  return uppercaseCount === 0 || uppercaseCount === len || (uppercaseCount === 1 && isFirstUppercase);
};