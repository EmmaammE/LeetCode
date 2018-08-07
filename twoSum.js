/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   var dict = {};
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if(complement in dict)
//       return [dict[complement],i]
//     dict[nums[i]] = i;
//   }

//   return null;
// };
var nums = [2,7,8,11];
var target = 9;
var twoSum = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement))
      return [map.get(complement), i]
    else{
      map.set(nums[i],i)
    }
  }

  return null;
};
console.log(twoSum(nums,target));