/**
 * 
 * 
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

Example 1:

Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10

*/

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
    // convert string to array of integers and string operands
    const parsed = parse(input);
    // cache for already calculated combinations of start and end indices in array
    const cache = {};
    // return recursive calculation of all possible combinations of parentheses
    return computeResults(parsed, 0, parsed.length - 1, cache);
};
/**
 * 
 * @param {mixed[]} parsed array of numbers and string operands
 * @param {number} start start index of array
 * @param {number} end end index
 * @param {Object} cache 
 */
function computeResults(parsed, start, end, cache) {
    // if start and end indecies are equal, return the number at the start index
    if (start === end) {
        return parsed.slice(start, start + 1);
    }
    let key = start + '-' + end;
    if (cache.hasOwnProperty(key)) {
        return cache[key];
    }
    let i = start + 1;// the i index is the location of the oparand - it is alwasy one ahead of current start integer
    const rs = [];/// the results array - is filled up with results of all combinations of operations
    // iterate over current section of array - i is the index of the oparand
    // the start and end indices are the locations of the integers

    while (i < end) {
        // calculate from start to i - 1 as left
        const left = computeResults(parsed, start, i - 1, cache);
        // calculate from i + 1 to end as right
        const right = computeResults(parsed, i + 1, end, cache);
        // combine left and right - push the results of the combinations to the results array
        rs.push(...calc(left, right, parsed[i]));
        i += 2;
    }
    // cache result
    cache[key] = rs;
    return rs;
}

/**
 * {number[]} rsLeft array of combination of results of left side of combinations
 * {number[]} rsRight array of combination of results of right side of combinations
 * {string} operator operation to perform on current results
 */
function calc(left, right, operand) {
    const rs = [];
    for (const l of left) {
        for (const r of right) {
            if (operand === '*') {
                rs.push(l * r);
            } else if (operand === '+') {
                rs.push(l + r);
            } else {
                rs.push(l - r);
            }
        }
    }
    return rs;
}

/**
 * Converts input string into array of string opartions and integers
 * e.g. [2, '-', 1, '-', 1]
 * {string} input string of operations
 */
function parse(input) {
    const rs = [];
    let num = '';
    for (let i = 0, l = input.length; i < l; i++) {
        if (input[i] >= '0' && input[i] <= '9') {
            num += input[i];
        } else {
            rs.push(+num, input[i]);
            num = '';
        }
    }
    rs.push(+num);
    return rs;
}