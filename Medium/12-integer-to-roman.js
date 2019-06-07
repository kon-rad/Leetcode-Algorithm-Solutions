/**
12. Integer to Roman
Medium

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */


'use strict';
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = '', cur = '', n, i = 1;
    const map = [
        {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX'
        }, {
            1: 'X',
            4: 'XL',
            5: 'L',
            9: 'XC'
        }, {
            1: 'C',
            4: 'CD',
            5: 'D',
            9: 'CM'
        }, {
            1: 'M',
        }
    ]

    map.forEach((e, i) => {
        if (num === 0) return;
        // get the right most number
        n = num % 10;
        // shorten number
        num = Math.floor(num /= 10);
        // if it's 1, 4, 5, or 9 - convert string directly from map
        if (e.hasOwnProperty(n)) {
            res = e[n] + res;
            return;
        }
        // if it's 2 or 3, build string with loop
        if (n < 4) {
            i = 1;
            while (i <= n) {
                res = e[1] + res;
                i++;
            }
            return;
            // if it's 6, 7 or 8, build string with loop
        }
        if (n < 9) {
            cur = e[5];
            n -= 5;
            i = 1;
            while (i <= n) {
                cur = cur + e[1];
                i++;
            }
            res = cur + res;
            return;
        }
    })
    return res;
};

