/**
 A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

 For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD. They can be formed by eliminating either the D or C from both strings. Note that we will not consider ABCD as a common child because we can't rearrange characters and ABCD  ABDC.

 Function Description

 Complete the commonChild function in the editor below. It should return the longest string which is a common child of the input strings.

 commonChild has the following parameter(s):

 s1, s2: two equal length strings
 Input Format

 There is one line with two space-separated strings,  and .

 Constraints

 All characters are upper case in the range ascii[A-Z].
 Output Format

 Print the length of the longest string , such that  is a child of both  and .

 Sample Input

 HARRY
 SALLY
 Sample Output

 2
 Explanation

 The longest string that can be formed by deleting zero or more characters from  and  is , whose length is 2.

 Sample Input 1

 AA
 BB
 Sample Output 1

 0
 Explanation 1

 and  have no characters in common and hence the output is 0.

 Sample Input 2

 SHINCHAN
 NOHARAAA
 Sample Output 2

 3
 Explanation 2

 The longest string that can be formed between  and  while maintaining the order is .

 Sample Input 3

 ABCDEF
 FBDAMN
 Sample Output 3

 2
 Explanation 3
 is the longest child of the given strings.
 **/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the commonChild function below.
function commonChild(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    const s1Len = s1.length;
    const s2Len = s2.length;
    let memo = [];
    let i, j;
    for (i = 0; i < s1Len; i++) {
        memo[i] = [];
        for (j = 0; j < s2Len; j++) {
            let topLeft, top, left;
            if (typeof memo[i - 1] !== 'undefined') {
                top = memo[i - 1][j];
                if (typeof memo[i - 1][j - 1] !== 'undefined') {
                    topLeft = memo[i - 1][j - 1];
                } else {
                    topLeft = 0;
                }
            } else {
                topLeft = 0;
                top = 0;
            }
            if (typeof memo[i][j - 1] !== 'undefined') {
                left = memo[i][j - 1];
            } else {
                left = 0;
            }

            if (s1[i] === s2[j]) {
                memo[i][j] = topLeft + 1;
            } else {
                memo[i][j] = Math.max(top, left);
            }
        }
    }
    return memo[i - 1][j - 1];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = commonChild(s1, s2);

    ws.write(result + "\n");

    ws.end();
}

