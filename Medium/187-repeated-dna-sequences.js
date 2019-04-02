/**
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

 /**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let dict = {};
  let ans = {};
  // iterate over string characters
  for (let i = 0, l = s.length; i<l-9; i++) {
      // create substring of 10 characters length
      sub = s.substr(i, 10);
      // if this string already has been seen, add
      // it to the answers dictionary
      if (dict.hasOwnProperty(sub)) {
          ans[sub] = true;
      } else {
          // otherwise add it to the dictionary.
          dict[sub] = true;
      }
  }
  // return keys of answer dictionary
  return Object.keys(ans);
};
