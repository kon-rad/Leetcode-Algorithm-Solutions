/**
 * 1547. Minimum Cost to Cut a Stick
Hard

Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows:


Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.

You should perform the cuts in order, you can change the order of the cuts as you wish.

The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation.

Return the minimum total cost of the cuts.

 

Example 1:


Input: n = 7, cuts = [1,3,4,5]
Output: 16
Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:

The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16).
Example 2:

Input: n = 9, cuts = [5,6,1,4,2]
Output: 22
Explanation: If you try the given cuts ordering the cost will be 25.
There are much ordering with total cost <= 25, for example, the order [4, 6, 5, 2, 1] has total cost = 22 which is the minimum possible.
 

Constraints:

2 <= n <= 10^6
1 <= cuts.length <= min(n - 1, 100)
1 <= cuts[i] <= n - 1
All the integers in cuts array are distinct.
 */

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost2 = function (n, cuts) {
  const dpo = new Array(n).fill(0);
  const dp = dpo.map((elem) => new Array(n).fill(0));
  const sc = cuts.sort((a, b) => a - b);
  console.log(sc);
  sc.unshift(0);
  sc.push(n);
  for (let i = cuts.length - 1; i > 0; i--) {
    for (let j = i + 1; j < cuts.length; j++) {
      if (i + 1 < j) {
        dp[i][j] = Number.MAX_SAFE_INTEGER;
        for (let k = i + 1; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
        }
        dp[i][j] += cuts[j] - cuts[i];
      }
    }
  }
  console.log(dp);
  return dp[0][cuts.length - 1];
};

var minCost = function (n, cuts) {
  cuts.push(0, n); // SENTINELS because I can choose the min and max as is
  cuts.sort((a, b) => a - b);
  console.log(cuts);
  let N = cuts.length;
  let dp = [...Array(N)].map((d) => [...Array(N)].map((d) => Infinity));

  // length of my window is 1
  //adjacent cuts on my starting array
  for (let i = 0; i < N; i++) {
    dp[i][i + 1] = 0; // cant cut it. As in I m never given the option to perform that cut No matter what the numbers are.
  }
  console.log('dp1: ', dp);

  // length of my window is 2
  for (let i = 0; i < N - 1; i++) {
    dp[i][i + 2] = cuts[i + 2] - cuts[i]; // Obviously, for every triplet a,b,c in cuts, dp[idx(a)][idx(c)]=c-a because I can only perform the cut at b (the middle element)
  }
  console.log('dp2: ', dp);

  // for every length
  for (let len = 3; len < N; len++) {
    //consider each window i,j of my CUTS ARRAY representing the actual window [cuts[i],cuts[j]]
    for (let i = 0; i <= N - len; i++) {
      let j = i + len;
      //consider each possible MIDDLE CUT k
      for (let k = i + 1; k < j; k++) {
        console.log('cuts[j], cuts[i]: ', cuts[j], cuts[i]);
        console.log('cuts[j] - cuts[i]: ', cuts[j] - cuts[i]);
        dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j]);
      }
    }
  }
  console.log('dp3: ', dp);

  console.log(N);
  return dp[0][N - 1];
};

// sorted
// [ 0, 1, 2, 4, 5, 6, 9 ]
const n = 9;
const cuts = [5, 6, 1, 4, 2];
console.log(minCost(n, cuts));
