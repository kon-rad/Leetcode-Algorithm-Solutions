/**
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num.length === 0 || !num) return 'Zero';
  num = (num+'').split('');
  let result = [];
  let sectionCount = 1;
  let section = [];
  
  for (let i = num.length -1; i>=0; i--) {
      section.unshift(num[i]);
      if (section.length === 3) {
          let hundredsSection = generateHundredsSection(section, sectionCount);
          if (hundredsSection.length !== 0) {
              result.unshift(...hundredsSection);
          }
          sectionCount++;
          section = [];
      }
  };
  if (section.length === 2) {
      result.unshift(generateTensSection(section), MAP_SECTIONS[sectionCount]);
  } else if (section.length === 1) {
      result.unshift(MAP_NUMBERS[section[0]], MAP_SECTIONS[sectionCount]);
  }
  return result.join(' ').trim();
};

function generateTensSection(section) {
  const resultSection = [];
  if (section[0] === '1') {
      return MAP_NUMBERS[section[0]+section[1]];
  }
  if (section[0] === '0') {
      return MAP_NUMBERS[section[1]];
  }
  if (section[1] !== '0') {
      return MAP_NUMBERS[section[0] + '0'] + ' ' + MAP_NUMBERS[section[1]];
  }
  return MAP_NUMBERS[section[0] + '0'];
}

function generateHundredsSection(section, sectionCount) {
  if (section.join('') === '000') return [];
  let resultSection = [];
  let hundreds = MAP_NUMBERS[section[0]];
  if (hundreds) {
      resultSection.push(hundreds);
      resultSection.push('Hundred');
  }
  let tens = generateTensSection(section.slice(1));
  if (tens) {
      resultSection.push(tens);
  }

  resultSection.push(MAP_SECTIONS[sectionCount]);
  return resultSection;
}
const MAP_SECTIONS = {
  1: '',
  2: 'Thousand',
  3: 'Million',
  4: 'Billion'
}
const MAP_NUMBERS = {
  '0': '',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
  '20': 'Twenty',
  '30': 'Thirty',
  '40': 'Forty',
  '50': 'Fifty',
  '60': 'Sixty',
  '70': 'Seventy',
  '80': 'Eighty',
  '90': 'Ninety',
}
