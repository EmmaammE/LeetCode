/**
 * @param {string} s
 * @return {string}
 */
s = "babad";
var longestPalindrome = function (s) {
  let sub = [0, 1];
  let max = [0, 1];
  for (let index = 0; index < s.length; index++) {
    let i = j = m =n = index;
//  偶数项
    while (s[i] === s[j + 1] && i >= 0 && j < s.length) {
      i--;
      j++
    }

// 回文序列为奇数项
    while (s[m] === s[n] && m >= 0 && n< s.length) {
      m--;
      n++;
    }

    if ((j - i) < (n-m-1) ) {
      sub[1] = n;
      sub[0] = m+1;
    }else{
      sub[0] = i + 1;
      sub[1] = j + 1;
    }

    if ((max[1]-max[0]) < (sub[1]-sub[0])) {
      max[1] = sub[1];
      max[0] = sub[0]
    }
  }
  return s.slice(max[0],max[1]);
};
console.log(longestPalindrome(s));