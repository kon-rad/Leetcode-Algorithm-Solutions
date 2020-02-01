/**
 * 57. Insert Interval
Hard

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const ns = newInterval[0];
  const ne = newInterval[1];
  for (let i = 0; i < intervals.length; i++) {
      let is = intervals[i][0];
      let ie = intervals[i][1];
      if (ns > is) {
          // new one start after current
          if (ns > ie) {
              let nis = intervals[i+1][0];
              let nie = intervals[i+1][1];
              // check if new end is less then next start
              if (
                  i + 1 === intervals.length
                  || ne < nis
              ) {
                  intervals.splice(i, 0, newInterval);
                  break;
              }
              // new start becomes new start of next interval
              if (ne >= nis && ne <= nie) {
                  // extend next interval start to new start
                  intervals[i+1][0] = ns;
                  break;
              }
              // new end becomes new end of next interval
              if (ns >= nis && ne >= nie) {
                  intervals[i+1][1] = ne;
                  break;
              }
          // new interval start begins inside of current interval
          } else if (ns >= is && ns <= ie) {
              let nis = intervals[i+1][0];
              let nie = intervals[i+1][1];
              while (i + 1 > intervals.length && ne > intervals[i+1][1]) {
                  i++;
              }
          }

      }
  }
  return intervals;
};
console.log(canJump([2,3,1,1,4]));