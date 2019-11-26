/*
37. Sudoku Solver
Hard

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...

...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/

const b = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];


const t1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board, 0, 0);
};

const solve = (board, row, col) => {
    for (let i = row; row < 9; row++, col = 0) {
        for (let j = col; col < 9; col++) {
            if (board[row][col] !== '.') continue;
            for (let k = 1; k < 10; k++) {
                if (isValid(board, row, col, k.toString())) {
                    board[row][col] = k.toString();
                    if (solve(board, row, col + 1)) {
                        return true;
                    }
                    board[row][col] = '.';
                }
            }
            return false;
        }
    }
    return true;
}

const isValid = (board, row, col, k) => {
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === k || board[row][i] === k) return false;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart + i][colStart + j] === k) return false;
        }
    }
    return true;
}
console.log('solution: ', solveSudoku(t1));

//https://leetcode.com/problems/sudoku-solver/discuss/347086/Python-DFS-Beats-100-with-explanation

// convert this to JS
// FULLSET = set('123456789')
// class Solution:
//     def solveSudoku(self, board: List[List[str]]) -> None:
//         vEmpty = [] # A list of empty grids
//         # A list composed of sets for storing impossible value
//         row = [set() for _ in range(9)]
//         col = [set() for _ in range(9)]
//         square = [set() for _ in range(9)]
//         for i in range(9):
//             for j in range(9):
//                 v = board[i][j]
//                 if v == '.':
//                     vEmpty.append([i, j])
//                 else:
//                     row[i].add(v)
//                     col[j].add(v)
//                     square[i//3*3+j//3].add(v)

//         self.dfs(board, vEmpty, row, col, square)
                    
//     def dfs(self, board, vEmpty, row, col, square):
//         if len(vEmpty) == 0:
//             return True

//         # vPossible, the possible values list for the blank
//         x, y, vPossible = None, None, ['.' for _ in range(9)] 
//         # Get vPossible which has minimal length
//         for v in vEmpty:
//             pos = FULLSET - row[v[0]] - col[v[1]] - square[v[0]//3*3+v[1]//3]
//             if len(vPossible) > len(pos):
//                 x, y = v
//                 vPossible = pos
//             if len(pos) == 1:
//                 break

//         vEmpty.remove([x, y])
//         for v in vPossible:
// 			# Check if the value is right
//             if v not in row[x] and \
//             v not in col[y] and \
//             v not in square[x//3*3+y//3]:
//                 board[x][y] = v
//                 row[x].add(v); col[y].add(v); square[x//3*3+y//3].add(v)
                
//                 # When guessed wrong value
//                 if not self.dfs(board, vEmpty, row, col, square):
//                     board[x][y] = '.'
//                     row[x].discard(v); col[y].discard(v); square[x//3*3+y//3].discard(v)
                    
//                 # When guessed temporary right value, guess the next value
//                 elif len(vEmpty) != 0 and not self.dfs(board, vEmpty, row, col, square):
//                     continue
                    
//                 elif len(vEmpty) == 0:
//                     return True
                
//         else: # Do not found appropriate value
//             vEmpty.append([x, y])
//             return False