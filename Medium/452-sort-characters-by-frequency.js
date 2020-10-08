/**
 * 451. Sort Characters By Frequency
Medium

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const dict = {};
  for (let i = 0, len = s.length; i < len; i++) {
    if (dict.hasOwnProperty(s[i])) {
      dict[s[i]] += 1;
    } else {
      dict[s[i]] = 1;
    }
  };
  let sorted = Object.keys(dict).sort((a, b) => {
    return dict[b] - dict[a];
  });
  return sorted.reduce((acc, curr) => {
    return acc + new Array(dict[curr]).fill(curr).join('');
  }, '');
};