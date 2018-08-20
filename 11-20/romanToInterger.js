/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var symbols = {
    M:1000,
    D:500,
    C:100,
    L:50,
    X:10,
    V:5,
    I:1
  }
  var temp = 1;
  var result = 0 ;
  for (let index = s.length-1; index >= 0; index-=1) {
    if (symbols[s[index]] < temp ) {
      result -= symbols[s[index]]
      // console.log(">",symbols[s[index]],result);
    }else{
      result += symbols[s[index]];
      // console.log("<=", symbols[s[index]],result);
    }
    temp = symbols[s[index]];
  }
  return result;
};
/**
 * 1000 100 1000
 * from right to left, the value should be in descending order
 * unless "4XX"
 * M CM X C IV
 *
*/
var input = 'MCMXCIV';
console.log(romanToInt(input));