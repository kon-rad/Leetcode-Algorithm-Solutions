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