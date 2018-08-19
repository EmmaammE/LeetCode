var s = "aa";
var p = "a*"
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = Array(s.length+1).fill(null).map(()=>{
    return Array(p.length+1).fill(null);
  })

  dp[0][0] = true;

  for (let index = 1; index <= s.length; index++) {
    dp[index][0] = false;
  }

  for (let index = 1; index <= p.length; index++) {
    if(p[index-1] === '*'){
      // a*b*...
      dp[0][index] = dp[0][index-2];
    }else{
      dp[0][index] = false;
    }
  }
console.log(dp,"init");
  for (let rowIndex = 0; rowIndex < s.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < p.length; columnIndex++) {
      if (s[rowIndex] === p[columnIndex] || p[columnIndex] === '.') {
        dp[rowIndex+1][columnIndex+1] = dp[rowIndex][columnIndex];
      }else if(p[columnIndex] === '*'){
        // if (dp[rowIndex+1][columnIndex-1] === true) {
        //   dp[rowIndex+1][columnIndex+1] = true;
        // } else if(dp[rowIndex][columnIndex+1] === true){
        //   if (s[rowIndex]===p[columnIndex-1]||p[columnIndex-1]==='.') {
        //     dp[rowIndex + 1][columnIndex + 1] = true;
        //   }
        // }
        // else{
        //   dp[rowIndex + 1][columnIndex + 1] = false;
        // }

         dp[rowIndex + 1][columnIndex + 1] = dp[rowIndex + 1][columnIndex -1] ||
            ((s[rowIndex]===p[columnIndex-1] || p[columnIndex-1]==='.') && (dp[rowIndex][columnIndex+1]))

      }else{
        dp[rowIndex+1][columnIndex+1] = false;
      }
    }
  }
  return dp[s.length][p.length]
};

console.log(isMatch(s, p));