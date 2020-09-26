/**
 * 
763. Partition Labels
Medium

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
 * 
 */

 /**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const dict = {};
  const result = [];
  // first loop - build dictionary
  for (let i = 0, len = S.length; i < len; i++) {
      let c = S[i];
      // the constraints are the min and max index of each dict
      // have a value of current start and end
      // for each char you find, record the min and max
      // as soon as you have a single unit, push substring to results
      if (dict.hasOwnProperty(c)) {
        if (dict[c].max < i) {
          dict[c].max = i;
        }
      } else {
          dict[c] = { min: i, max: i };
      }
  }
  // second loop - build results
  let start = -1, end = -1, count = 0;
  for (let i = 0, len = S.length; i < len; i++) {
    let c = S[i];
    if (i === 0) {
      start = dict[c].min;
      end = dict[c].max;
    }
    count++;
    if (dict[c].min > end && end !== -1) {
      result.push(end - start + 1);
      start = dict[c].min;
      end = dict[c].max;
      count = 0;
      continue;
    }
    if (dict[c].max > end) {
      end = dict[c].max;
    }
  }
  result.push(end - start + 1);
  return result;
};