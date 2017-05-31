// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//brute force method
// var twoSum = function(nums, target) {
//     for(var i = 0;i<nums.length;i++){
//       for (var j = i + 1;j<nums.length;j++){
//         if (nums[j] + nums[i] === target){
//           return ([i,j])
//         }
//       }
//     }
// };





var twoSum = function(nums, target) {
  var hash = {};
  for(var i = 0; i<nums.length;i++){
    let neededval = target - nums[i]
    if (hash[neededval]){
      return([hash[neededval],i])
    }
    else{
      hash[nums[i]]=i
    }
  }
};

console.log(twoSum([0,1,2],3))

console.log(twoSum([3,2,4],6))