/**
 * 973. K Closest Points to Origin
Medium


We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
 */

 /**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosestV1 = function(points, K) {
  const result = [];
  const sortedMap = {};
  const pointsDist = [];

  points.forEach((point, index) => {
    let xDist = Math.abs(point[0]);
    let yDist = Math.abs(point[1]);
    let euclideanDist = Math.sqrt(xDist * xDist + yDist * yDist);
    sortedMap[euclideanDist + '~' + index] = point;
    pointsDist.push(euclideanDist);
  });
  const sortedKeys = Object.keys(sortedMap).sort((a, b) => {
    let aVal = parseFloat(a.split('~')[0]);
    let bVal = parseFloat(b.split('~')[0]);
    return aVal - bVal;
  });
  let i = 0;
  while (i < K) {
    result.push(sortedMap[sortedKeys[i]]);
    i++;
  }
  return result;
};


const kClosestV2 = (points, K) => {
  quickSelect(points, K, 0, points.length - 1);
  return points.slice(0, K);
}

const quickSelect = (points, K, low, high) => {
  if (low >= high) return;

  const partPoint = partition(points, low, high);
  if (partPoint === K - 1) return;
  if (partPoint < K - 1) {
    quickSelect(points, K, partPoint + 1, high);
  } else {
    quickSelect(points, K, low, partPoint - 1);
  }
}

const partition = (points, low, high) => {
  const pivot = points[high];
  let i = low;
  let j = low;
  while (i < high) {
    if (getDist(points[i]) < getDist(pivot)) {
      swap(points, i, j);
      j++;
    }
    i++;
  }
  swap(points, high, j);
  return j;
}

const getDist = (point) => {
  return point[0] * point[0] + point[1] * point[1];
}

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let points = [[3,3],[5,5],[-2,-2], [20, 20], [100, 100], [10, 10], [14, 14]], K = 2;

console.log(kClosestV2(points, K));

