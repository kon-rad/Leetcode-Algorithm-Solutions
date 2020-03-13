/**
 * 599. Minimum Index Sum of Two Lists
Easy

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
 */

 /**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const l1 = createMap(list1), l2 = createMap(list2);
  const commonInt = {};
  let lowestIndex = Number.MAX_VALUE;
  let result = [];
  
  for (let i = 0; i < list2.length; i++) {
      let l2Elem = list2[i];
      if (l1.hasOwnProperty(l2Elem)) {
          let curIndexSum = i + l1[l2Elem];
          commonInt[l2Elem] = curIndexSum;
          if (curIndexSum < lowestIndex) {
              result = [l2Elem];
              lowestIndex = curIndexSum;
          } else if (curIndexSum === lowestIndex) {
              result.push(l2Elem);
          }
      }
  }
  return result;
};

const createMap = list => {
  const map = {};
  for (let i = 0; i < list.length; i++) {
      map[list[i]] = i;
  }
  return map;
}