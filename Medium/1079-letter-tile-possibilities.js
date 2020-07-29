/**
 * 
 * 
1079. Letter Tile Possibilities
Medium

You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

 

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: "AAABBC"
Output: 188
 

Note:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
 */

/**
 * This solution only calculates number of combinations, without finding what they are
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const map = new Map();
  for (let i = 0, len = tiles.length; i < len; i++) {
      map.set(tiles[i], (map.get(tiles[i]) || 0) + 1);
  }
  return recursiveCount(map);
};

const recursiveCount = (map) => {
  let sum = 0;
  for (let [key, value] of map.entries()) {
      if (value === 0) continue;
      sum++;
      map.set(key, map.get(key) - 1);
      sum += recursiveCount(map);
      map.set(key, map.get(key) + 1);
  }
  return sum;
}


/**
 * This solution finds all combinations
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const comb = recursiveComb(tiles, new Set(), '');
  return comb.size;
};

const recursiveComb = (tiles, seenStr, currentStr) => {
  if (tiles.length === 0) {
      return seenStr;
  }
  for(let i = 0, len = tiles.length; i < len; i++) {
      let str = currentStr + tiles[i];
      seenStr.add(str);
      let newtiles = tiles.slice(0, i) + tiles.slice(i + 1);
      recursiveComb(newtiles, seenStr, str);
  }
  return seenStr;
}