/**
 * @param {number} x
 * @return {boolean}
 */
var x = 0;
var isPalindrome = function (x) {
  if (x<0) {
    return false;
  }
  var result = 0;
  var init = x;
  while (x!==0) {
    result = result * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return result === init;
};
 console.log('====================================');
 console.log(isPalindrome(x));
 console.log('====================================');