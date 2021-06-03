/**
 * Queen's Attack II

You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from :

image

There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location  in the diagram above prevents the queen from attacking cells , , and :

image

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

Function Description

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

Returns
- int: the number of squares the queen can attack

Input Format

The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
The next line contains two space-separated integers  and , the queen's row and column position.
Each of the next  lines contains two space-separated integers  and , the row and column position of .

Constraints

A single cell may contain more than one obstacle.
There will never be an obstacle at the position where the queen is located.
Subtasks

For  of the maximum score:

For  of the maximum score:

Sample Input 0

4 0
4 4
Sample Output 0

9
Explanation 0

The queen is standing at position  on a  chessboard with no obstacles:

image

Sample Input 1

5 3
4 3
5 5
4 2
2 3
Sample Output 1

10
Explanation 1

The queen is standing at position  on a  chessboard with  obstacles:

image

The number of squares she can attack from that position is .

Sample Input 2

1 0
1 1
Sample Output 2

0
Explanation 2

Since there is only one square, and the queen is on it, the queen can move 0 squares.
 */

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
  // obstacles closest to queen
  const up = { r: -1, c: -1 };
  const down = { r: -1, c: -1 };
  const right = { r: -1, c: -1 };
  const left = { r: -1, c: -1 };

  // up right
  const ur = { r: -1, c: -1 };
  // up left
  const ul = { r: -1, c: -1 };
  // down right
  const dr = { r: -1, c: -1 };
  // down left
  const dl = { r: -1, c: -1 };

  obstacles.forEach((obs) => {
    // obs = [row, col]
    let obs_row = obs[0];
    let obs_col = obs[1];
    // obstacle is on the same column as queen
    if (obs_col === c_q) {
      if (obs_row > r_q && (obs_row < up.r || up.r === -1)) {
        // up
        up.r = obs_row;
        up.c = obs_col;
        return;
      } else if (obs_row < r_q && (obs_row > up.r || up.r === -1)) {
        // down
        down.r = obs_row;
        down.c = obs_col;
        return;
      }
    } else if (obs_row === r_q) {
      // it is on the same row
      if (obs_col > c_q && (obs_col < right.c || right.c === -1)) {
        // it is to the right
        right.r = obs_row;
        right.c = obs_col;
        return;
      } else if (obs_col < c_q && (obs_col > left.c || left.c === -1)) {
        // it is to the left
        left.c = obs_col;
        left.r = obs_row;
        return;
      }
    }

    // down right
    if (
      r_q - obs_row === obs_col - c_q &&
      obs_col > c_q &&
      obs_row < r_q &&
      ((obs_row > dr.r && obs_col < dr.c) || dr.r === -1)
    ) {
      dr.r = obs_row;
      dr.c = obs_col;
      return;
    }

    // down left
    if (
      r_q - obs_row === c_q - obs_col &&
      obs_col < c_q &&
      obs_row < r_q &&
      ((obs_row > dl.r && obs_col > dl.c) || dl.r === -1)
    ) {
      dl.r = obs_row;
      dl.c = obs_col;
      return;
    }

    // up right
    if (
      obs_row - r_q === obs_col - c_q &&
      obs_row > r_q &&
      obs_col > c_q &&
      ((obs_row < ur.r && obs_col < ur.c) || ur.r === -1)
    ) {
      ur.r = obs_row;
      ur.c = obs_col;
      return;
    }
    // up left
    if (
      c_q - obs_col === obs_row - r_q &&
      obs_col < c_q &&
      obs_row > r_q &&
      ((obs_row < ul.r && obs_col > ul.c) || ul.r === -1)
    ) {
      ul.r = obs_row;
      ul.c = obs_col;
      return;
    }
  });

  let su = up.r === -1 ? n - r_q : up.r - r_q - 1;
  let sd = down.r === -1 ? r_q - 1 : r_q - down.r - 1;
  let sr = right.c === -1 ? n - c_q : right.c - c_q - 1;
  let sl = left.c === -1 ? c_q - 1 : c_q - left.c - 1;

  // diagonals
  // squares up right
  let sur = ur.c === -1 ? Math.min(n - r_q, n - c_q) : ur.c - c_q - 1;
  let sul = ul.c === -1 ? Math.min(n - r_q, c_q - 1) : c_q - ul.c - 1;
  let sdr = dr.c === -1 ? Math.min(r_q - 1, n - c_q) : dr.c - c_q - 1;
  let sdl = dl.c === -1 ? Math.min(c_q - 1, r_q - 1) : c_q - dl.c - 1;
  return su + sd + sr + sl + sur + sul + sdr + sdl;
}

let n = 100,
  r_q = 48,
  c_q = 81;
const obs = [
  [54, 87],
  [64, 97],
  [42, 75],
  [32, 65],
  [42, 87],
  [32, 97],
  [54, 75],
  [64, 65],
  [48, 87],
  [48, 75],
  [54, 81],
  [42, 81],
  [45, 17],
  [14, 24],
  [35, 15],
  [95, 64],
  [63, 87],
  [25, 72],
  [71, 38],
  [96, 97],
  [16, 30],
  [60, 34],
  [31, 67],
  [26, 82],
  [20, 93],
  [81, 38],
  [51, 94],
  [75, 41],
  [79, 84],
  [79, 65],
  [76, 80],
  [52, 87],
  [81, 54],
  [89, 52],
  [20, 31],
  [10, 41],
  [32, 73],
  [83, 98],
  [87, 61],
  [82, 52],
  [80, 64],
  [82, 46],
  [49, 21],
  [73, 86],
  [37, 70],
  [43, 12],
  [94, 28],
  [10, 93],
  [52, 25],
  [50, 61],
  [52, 68],
  [52, 23],
  [60, 91],
  [79, 17],
  [93, 82],
  [12, 18],
  [75, 64],
  [69, 69],
  [94, 74],
  [61, 61],
  [46, 57],
  [67, 45],
  [96, 64],
  [83, 89],
  [58, 87],
  [76, 53],
  [79, 21],
  [94, 70],
  [16, 10],
  [50, 82],
  [92, 20],
  [40, 51],
  [49, 28],
  [51, 82],
  [35, 16],
  [15, 86],
  [78, 89],
  [41, 98],
  [70, 46],
  [79, 79],
  [24, 40],
  [91, 13],
  [59, 73],
  [35, 32],
  [40, 31],
  [14, 31],
  [71, 35],
  [96, 18],
  [27, 39],
  [28, 38],
  [41, 36],
  [31, 63],
  [52, 48],
  [81, 25],
  [49, 90],
  [32, 65],
  [25, 45],
  [63, 94],
  [89, 50],
  [43, 41],
];

console.log(queensAttack(n, 100, r_q, c_q, obs));
