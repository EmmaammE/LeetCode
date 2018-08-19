/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
/**numRows=3  k
 *  0     4       8
 *  1  3  5   7   9
 *  2     6       10
 *
 * numRows=4
 *  0       6           12
 *  1    5  7       11  13
 *  2  4    8   10      14
 *  3       9           15
 * 0: 余数0
 * 1：余数1 余数m-1 +m-2
 * 2: 余数2 余数m-2 +m-4
 * ...
 * k-2: 余数k-2 余数m-(k-2) +m-(k-2)-(k-2)
 * k-1: 余数k-1
 *
 */
var s = "0123456789";
var numRows = 4;

var convert = function (s, numRows) {
  let result = "";
  let m = 2*numRows-2;
  if(m!==0){
    // for (let i = 0; i < numRows; i++) {
    //   for (let index = 0; index < s.length; index++) {
    //     const element = s[index];
    //     if (index % m === i || index % m === (m - i)) {
    //       result += element;
    //     }
    //   }
    // }
    for (let i = 0; i < numRows; i++) {
      for (let index = i; index < s.length; index=index+m) {
        const element = s[index];
        result+=element;
        if (i!==0 && i!==numRows-1) {
          if (index + m - 2*i < s.length) {
            result += s[index + m - 2 * i];
          }
        }
      }
    }
  }else{
    result=s;
  }
  return result;
};
console.log(convert(s, numRows));

var convert2 = function (s,numRows) {
  if (numRows===1) {
    return s;
  }

  let row = 0;
  let direction = 1;
  let result = new Array(numRows).fill('');
  // for (let index = 0; index < numRows; index++) {
  //   result[index] = "";
  // }
  for (let index = 0; index < s.length; index++) {
    if (row === 0 && direction === -1) {
      direction = 1;
    }
    if (row === numRows-1 && direction === 1) {
      direction = -1;
    }
    result[row]+=s[index];
    row+=direction;
  }
  return result.join('');
  // return result.toString().replace(/,/g, '');
}
console.log(convert2(s,numRows));
