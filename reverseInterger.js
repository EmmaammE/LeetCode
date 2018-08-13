/**
 * @param {number} x
 * @return {number}
 */
x = -15;
var reverse = function (x) {
  // var temp = parseInt(Math.abs(x).toString().split("").reverse().join("") * Math.sign(x));
  var temp = Math.abs(x);
  var result = '';
  while(temp!==0){
    result+=(temp%10);
    temp = parseInt(temp / 10);
  }
  result = result * Math.sign(x);
  if (result > 0x7fffffff || result < -0x80000000) {
    result = 0;
  }
  return result;

};
// reverse(x);
console.log(reverse(x));