/**
 * @param {string} str
 * @return {number}
 */
var str = "42";
var myAtoi = function (str) {
  var result;
  if (str === '') {
    return 0;
  }
  var strs = str.trimLeft().split("");
  str = str.replace(/\s/g, '');
  if (str === '') {
    return 0;
  }

  let sign = false;
  if (isNaN(str[0])) {
    switch (str[0]) {
      case '-':
        if (str.length === 1) {
          return 0;
        }
        sign = true;
        break;
      case '+':
        if (str.length === 1) {
          return 0;
        }
        sign = true;
        break;
      case 0:
        return 0;
      default:
        return 0;
    }
  }

  for (let index = 1; index < strs.length; index++) {
    console.log(index, strs[index]);
    if (isNaN(strs[index]) || strs[index] === ' ') {

      if (index === 1 && sign) {
        return 0;
      }
      result = Number(strs.splice(0, index).join(''));
      break;
    }
  }
  //  未进入循环或未进入if
  // 不能初始化為數字
  if (result === undefined) {
    result = Number(str);
  }
  if (result > 0x7fffffff) {
    return 0x7fffffff;
  } else if (result < -0x80000000) {
    return -0x80000000;
  }

  return result;

};

var myAtoi2 = function (str) {
  var result=0;
  var sign_ = 1;
  if (str === '') {
    return 0;
  }
  let i=0;
  str = str.trim();
  if(str[0]=='-'){
    sign_ = -1;
    i++;
  }else if(str[0] == '+'){
    sign_ = 1;
    i++;
  }

  while('0' <= str[i] && str[i]<='9'){
    result = result * 10 + (str[i++] - '0')
  }

  result =  result * sign_;
  if (result > 0x7fffffff) {
    return 0x7fffffff;
  } else if (result < -0x80000000) {
    return -0x80000000;
  }

  return result;
};
console.log("----",myAtoi(str));
