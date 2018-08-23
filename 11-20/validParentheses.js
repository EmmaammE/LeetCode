/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = new Array();
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    switch (element) {
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
      default:
        if (stack.pop()!==element) {
          console.log(stack);
          return false;
        }
    }
  }
  if (stack.length!==0) {
    return false;
  }
  return true;
};
console.log(isValid('[[]]()'));