function calculate_with_parentheses(s) {
  // Write your code here
  const nums = [];
  const ops = [];
  let currNum = '';
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === '+' || s[i] === '-') {
      ops.push(s[i]);
      nums.push(parseInt(currNum));
      currNum = '';
    } else if (s[i] === '(') {
      let openParensCount = 1;
      let j = i + 1;
      for (j; j < len; j++) {
        if (s[j] === '(') {
          openParensCount++;
        } else if (s[j] === ')') {
          openParensCount--;
          if (openParensCount === 0) {
            break;
          }
        }
      }
      let parensInner = s.substring(i + 1, j);
      let parensVal = calculate_with_parentheses(parensInner);
      i = j;
      currNum = parensVal + '';
    } else {
      currNum += s[i];
    }
  }

  if (currNum) {
    nums.push(parseInt(currNum));
  }
  let currInt = nums[0];
  let opsIndex = 0;
  for (let i = 1, len = nums.length; i < len; i++) {
    const currOp = ops[opsIndex];
    if (currOp === '+') {
      currInt += nums[i];
    } else if (currOp === '-') {
      currInt -= nums[i];
    }
    opsIndex++;
  }
  return currInt;
}

console.log(calculate_with_parentheses('5+16-((9-6)-(4-2))+1'));
