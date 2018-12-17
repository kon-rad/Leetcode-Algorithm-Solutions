/**
 * Given a collection of intervals, merge all overlapping intervals.

 Example 1:

 Input: [[1,3],[2,6],[8,10],[15,18]]
 Output: [[1,6],[8,10],[15,18]]
 Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 Example 2:

 Input: [[1,4],[4,5]]
 Output: [[1,5]]
 Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => { return a.start - b.start });
  for (let i = 0; i < intervals.length - 1; i++) {
    let a = intervals[i];
    let b = intervals[i+1];
    if (a.start <= b.start && a.start <= b.end && a.end >= b.end) {
      let newItem = new Interval(a.start, a.end);
      intervals[i] = newItem;
      intervals.splice(i+1, 1);
      i--;
    } else if (a.start <= b.start && a.end <= b.end && a.end >= b.start) {
      let newItem = new Interval(a.start, b.end);
      intervals[i] = newItem;
      intervals.splice(i+1, 1);
      i--;
    }
  }

  return intervals;
}