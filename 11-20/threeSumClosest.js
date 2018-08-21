/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // var result =  Number.MAX_VALUE
  var result = Infinity;
  nums = nums.sort(function (a, b) {
    return a - b;
  })
  for (let index = 0; index < nums.length; index++) {
    var left = index + 1;
    var right = nums.length - 1;
    while (left < right) {
      var total = nums[left] + nums[right] + nums[index];
      var temp = Math.abs(total - target);
      if (total === target) {
        return target;
      }
      if (temp < Math.abs(result - target)) {
        result = total;
      }
      if (total < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(Infinity);
console.log(threeSumClosest([1, 1, 1, 0], -100));
console.log(threeSumClosest([-1, 2, 1, -4], -6));