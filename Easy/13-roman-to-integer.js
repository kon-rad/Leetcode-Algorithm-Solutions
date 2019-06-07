/**
13. Roman to Integer
Easy
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
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */


'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    const MAP = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    };
    const ONES = {
        'I': 1,
        'X': 10,
        'C': 100,
        'M': 1000,
    };
    const FIVES = {
        'V': 5,
        'L': 50,
        'D': 500,
    }
    for (let i = 0, len = s.length; i < len; i++) {
        if (i+1 < len && MAP.hasOwnProperty(s[i] + s[i+1])) {
            res += MAP[s[i] + s[i+1]];
            i++;
            continue;
        }
        if (FIVES.hasOwnProperty(s[i])) {
            res += FIVES[s[i]];
            continue;
        }
        if (ONES.hasOwnProperty(s[i])) {
            res += ONES[s[i]];
            continue;
        }
    }
    return res;
};