/**
 * @param {number} n
 * @return {string[]}
 */
function backtrack(result, open, close, cur, n) {
  // console.log(open,close,result,cur);
  if (cur.length === 2 * n) {
    result.push(cur);
    return;
  }
  if (open < n) {
    backtrack(result,  open + 1,close, cur + "(", n);
  }
  if (close < open) {
    backtrack(result,  open, close + 1,cur + ")", n);
  }
}

var generateParenthesis = function (n) {
  var result = new Array();
  backtrack(result,0,0,"",n);
  return result;
};



console.log(generateParenthesis(3));