/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

For example, if , it is a valid string because frequencies are . So is  because we can remove one  and have  of each character in the remaining string. If  however, the string is not valid as we can only remove  occurrence of . That would leave character frequencies of .

Function Description

Complete the isValid function in the editor below. It should return either the string YES or the string NO.

isValid has the following parameter(s):

s: a string
Input Format

A single string .

Constraints

Each character 
Output Format

Print YES if string  is valid, otherwise, print NO.

Sample Input 0

aabbcd
Sample Output 0

NO
Explanation 0

Given , we would need to remove two characters, both c and d  aabb or a and b  abcd, to make it valid. We are limited to removing only one character, so  is invalid.

Sample Input 1

aabbccddeefghi
Sample Output 1

NO
Explanation 1

Frequency counts for the letters are as follows:

{'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

There are two ways to make the valid string:

Remove  characters with a frequency of : .
Remove  characters of frequency : .
Neither of these is an option.

Sample Input 2

abcdefghhgfedecba
Sample Output 2

YES
Explanation 2

All characters occur twice except for  which occurs  times. We can delete one instance of  to have a valid string.
 */


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

// Complete the isValid function below.
function isValid(s) {
    if (s.length === 1) return 'YES';
    const d = {};
    s.split('').forEach(c => {
        if (d.hasOwnProperty(c)) d[c]++;
        else d[c] = 1;
    });
    const m = {};
    for (let c in d) {
        if (m.hasOwnProperty(d[c])) m[d[c]]++;
        else m[d[c]] = 1;
    }
    let mArr = Object.keys(m);
    console.log(m, d);
    if (mArr.length === 2) {
        if ((m[mArr[0]] === 1 && parseInt(mArr[0]) === 1)
            || (m[mArr[1]] === 1 && parseInt(mArr[1]) === 1)
        ){
            return 'YES';
        }
        if (m[mArr[0]] === 1) {
            if (parseInt(mArr[0]) - parseInt(mArr[1]) === 1) {
                return 'YES';
            }
        } else if (m[mArr[1]] === 1) {
            if (parseInt(mArr[1]) - parseInt(mArr[0]) === 1) {
                return 'YES';
            }
        }
    }
    return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
