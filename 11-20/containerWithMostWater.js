/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
      right = height.length - 1;
  let max = 0;
  while (left !== right) {
    if (height[left] < height[right]) {
      max = Math.max(max, height[left] * (right - left));
      left++;
    } else {
      max = Math.max(max, height[right] * (right - left));
      right--;
    }
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));