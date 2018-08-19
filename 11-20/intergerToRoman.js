/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var symbols = Array('M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I');
  var value   = Array(1000,900,500,400,100, 90,  50,  40, 10,  9,  5,    4,  1);
  var result = "";
  for (let index = 0; index < value.length; index+=1) {
    var temp = 0;
   if (num!==0) {
     temp = parseInt(num / value[index]);
     num -= temp * value[index];
     for (let i = 0; i < temp; i+=1) {
       result+=symbols[index]
     }
   }
  }
  return result;
};

var input = 1994;
console.log(intToRoman(input));