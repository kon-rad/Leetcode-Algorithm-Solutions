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
    const combinations = perm(words);
    const output = [];
    let sc = s;
    combinations.forEach(com => {
        sc = s;
        let currentIndex = 0;
        let matchesFound = 0;
        while(sc.indexOf(com, currentIndex + matchesFound) > -1) {
            let ix = sc.indexOf(com, currentIndex);
            currentIndex += ix;
            output.push(currentIndex);
            matchesFound++;
        }
        
    })
    return output;
};

function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
        if (ret.indexOf([xs[i]].join('')) === -1) {
            ret.push([xs[i]].join(''))
        }
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        if (ret.indexOf([...[xs[i]], ...rest[j]].join('')) === -1) {
            ret.push([...[xs[i]], ...rest[j]].join(''))
        }
      }
    }
  }
  return ret;
}