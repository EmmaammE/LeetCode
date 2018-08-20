/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length <= 1)
    return strs[0] || "";
  var prefix = "";
  var pre = "";
  for (let index = 0; index < strs[0].length; index++) {
    pre = strs[0][index];
    for (let j = 0; j < strs.length; j++) {
      if (pre !== strs[j][index]) {
        return prefix;
      }
    }

    prefix += pre;
  }
  return prefix;
};

var input = [];
//  ["flower", "flow", "flight"]
// ["dog", "racecar", "car"]
console.log(longestCommonPrefix(input));