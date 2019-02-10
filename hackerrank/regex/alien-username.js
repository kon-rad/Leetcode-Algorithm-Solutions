/**
In a galaxy far, far away, on a planet different from ours, each computer username uses the following format:

It must begin with either an underscore, _ (ASCII value ), or a period, . (ASCII value ).
The first character must be immediately followed by one or more digits in the range  through .
After some number of digits, there must be  or more English letters (uppercase and/or lowercase).
It may be terminated with an optional _ (ASCII value ). Note that if it's not terminated with an underscore, then there should be no characters after the sequence of  or more English letters.
Given  strings, determine which ones are valid alien usernames. If a string is a valid alien username, print VALID on a new line; otherwise, print INVALID.

Input Format

The first line contains a single integer, , denoting the number of usernames. 
Each line  of the  subsequent lines contains a string denoting an alien username to validate.

Constraints

Output Format

Iterate through each of the  strings in order and determine whether or not each string is a valid alien username. If a username is a valid alien username, print VALID on a new line; otherwise, print INVALID.

Sample Input

3
_0898989811abced_
_abce
_09090909abcD0
Sample Output

VALID
INVALID
INVALID
Explanation

We validate the following three usernames:

_0898989811abced_ is valid as it satisfies the requirements specified above. Thus, we print VALID.
_abce is invalid as the beginning _ is not followed by one or more digits. Thus, we print INVALID.
_09090909abcD0 is invalid as the sequence of English alphabetic letters is immediately followed by a number. Thus, we print INVALID.
 */

var fs = require('fs');

try {  
    var data = fs.readFileSync('input.txt', 'utf8');
    console.log(data.toString());    
    processData(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

function processData(input) {
  input = input.split('\n').slice(1);
  const regex = /^[_.]\d+[a-zA-Z]*_?$/;
  input.forEach(i => {
      console.log(i.match(regex) ? 'VALID' : 'INVALID');
  });
}