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
 * O(n) time comlexity
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const len = intervals.length;
    while (i < len && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    newInterval[0] = Math.min(newInterval[0], i < len ? intervals[i][0] : Infinity);
    while (i < len && newInterval[1] >= intervals[i][0]) {
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++
    }
    result.push(newInterval);
    return result.concat(intervals.slice(i));
};
console.log(insert(
    [[1,2],[3,5],[6,7],[8,10],[12,16]],
    [4,8]
    )
);