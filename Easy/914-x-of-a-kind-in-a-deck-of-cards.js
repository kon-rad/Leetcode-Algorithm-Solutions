/**
914. X of a Kind in a Deck of Cards
Easy

665

165

Add to List

Share
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false´
Explanation: No possible partition.
Example 3:

Input: deck = [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: deck = [1,1]
Output: true
Explanation: Possible partition [1,1].
Example 5:

Input: deck = [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2].
 

Constraints:

1 <= deck.length <= 10^4
0 <= deck[i] < 10^4

 * 
 */
/**
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const dict = {};
    deck.forEach(num => {
        dict[num] = (dict[num] || 0) + 1;
    });
    const groups = Object.values(dict);
    let g = groups[0];
    for (let i = 0; i < groups.length; i++) {
      g = gcd(groups[i], g);
      if (g < 2) return false;
    };
    return true;
};

/**
 * Finds the greatest common divisior
 * @param {*} x 
 * @param {*} y 
 */
const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));