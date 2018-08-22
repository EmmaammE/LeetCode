/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  const symbols = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
   // 否则，result的修改会修改symbols，改变长度
  var result = symbols[digits[0]].slice(0);

  for (let index = 1; index < digits.length; index++) {
    // var outerLength = 3;
    // if (digits[index] === '7' || digits[index] === '9') {
    //   outerLength = 4;
    // }
    var rlength = result.length;

    for (let index2 = 0; index2 < symbols[digits[index]].length; index2++) {
      const element = symbols[digits[index]][index2];
      for (let inner = 0; inner < rlength; inner++) {
        result.push(result[inner] + element);
      }

    }
    result = result.slice(rlength);
  }
  return result;
}


console.log(letterCombinations('555'));