/**
 * @param {string} s
 * @return {number}
 */
// 1.后出现的子串没有保存
// 2.最后在末尾才出现的最长子串没有赋值给max
// 3.对子串的更新有问题
s = "aabaab!bb";
var lengthOfLongestSubstring = function (s) {
  var substring = "";
  var max=0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    var temp = substring.indexOf(element);
    if (temp!== -1) {
       if (max < substring.length) {
         max = substring.length;
       }
      substring = substring.slice(temp+1)+element;
    }
    else{
      substring += element;
    }
  }

   if (max < substring.length) {
     max = substring.length;
   }
  return max;
};
console.log(lengthOfLongestSubstring(s));