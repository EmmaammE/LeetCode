/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var  nums1 = [3, 4];
 var nums2 = [2,7];
var findMedianSortedArrays = function (nums1, nums2) {
  let length1 = nums1.length;
  let length2 = nums2.length;
  let i = 0;
  let j = 0;
  let medianIndex = 0;
  let medianIndex2;
  let median = 0;
  let temp = 0;
  if ((length1+length2)%2 === 0) {
    medianIndex2 = 0;
  }
  let index = parseInt((length1 + length2) / 2 + 1);
  let index2 = parseInt((length1+length2)/2);
  while(i<length1 && j<length2){
    if(nums1[i] < nums2[j]){
      medianIndex++;
      if (medianIndex2!==undefined) {
        if (medianIndex === index2) {
          medianIndex2 = nums1[i];
        }
      }
      if (medianIndex === index ){
        median = nums1[i];
        break;
      }
      i++;
    }else{
      medianIndex++;//1
      if (medianIndex2 !== undefined) {
        if (medianIndex === index2) {
          medianIndex2 = nums2[j];
        }
      }
      if (medianIndex ===index ){
        median = nums2[j];
        break;
      }
      j++;
    }
    console.log(temp++,medianIndex,"i",i,"j",j);
  }
  while(i<length1){
    medianIndex++;
    if (medianIndex2 !== undefined) {
      if (medianIndex === index2) {
        medianIndex2 = nums1[i];
      }
    }
    if (medianIndex === index) {
      median = nums1[i];
      break;
    }
    i++;
  }
  while(j<length2){
    medianIndex++;
    if (medianIndex2 !== undefined) {
      if (medianIndex === index2) {
        medianIndex2 = nums2[j];
      }
    }
    if (medianIndex === index) {
      median = nums2[j];
      break;
    }
    j++;
  }
  if (medianIndex2!==undefined) {
    return (median+medianIndex2)/2;
  }else{
    return median;
  }
};

console.log(findMedianSortedArrays(nums1,nums2));