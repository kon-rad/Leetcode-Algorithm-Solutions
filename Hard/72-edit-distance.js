/**
 *72. Edit Distance
Hard

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 

Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  // the dp nested array is the length of the word plus one
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((item) => new Array(len2 + 1).fill(0));

  // outer loop goes over word 1
  // notice the loop goes through the length of the word plus 1
  for (let i = 0; i <= len1; i++) {
    // inner loop goes over word 2 - it is the columns
    for (let j = 0; j <= len2; j++) {
      if (i === 0) {
        // this is the first row
        dp[i][j] = j;
      } else if (j === 0) {
        // this is the first column
        dp[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        // the two characters are the same - keep the same value as previously
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // the two characters are different - set the minimum of three previous options plus 1
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    }
  }
  // notice the last item in the array is the length of the word
  return dp[len1][len2];
};

const word1 = 'horse',
  word2 = 'ros';
console.log(minDistance(word1, word2));
