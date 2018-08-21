/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var results = new Array();
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  // console.log(nums);
  for (let index = 0; index < nums.length; index++) {
    if (index>0 && nums[index] === nums[index-1]) {
      continue;
    }
    var left = index + 1;
    var right = nums.length - 1;
    while (left < right) {
      var temp = nums[index] + nums[left] + nums[right];
      if (temp === 0) {
        results.push([nums[index], nums[left], nums[right]]);
        while (left<right && nums[left] === nums[left + 1]) {
          // console.log(nums[left],nums[left+1],left,"-");
          left++;
        }
        while (left < right&&nums[right] === nums[right - 1]) {
          // console.log(nums[right],nums[right-1]);
          right--;
        }
        left++;
        right--;
      } else if (temp < 0) {
        left++;
      } else if (temp > 0) {
        right--;
      }
    }
  }
  return results;
};

console.log(threeSum([3, 0, -2, -1, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
