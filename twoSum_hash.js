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
  var hash = {}; //create hash which stores values as keys and index as value
  for(var i = 0; i<nums.length;i++){
    let neededval = target - nums[i] //iterate thru loop and find needed companion value 
    if (hash[neededval]){
      return([hash[neededval],i]) //if needed value found in hash then return along with current index as these are two values that sum up to target
    }
    else{
      hash[nums[i]]=i //otherwise add current value and index to hash for reference later
    }
  }
};

console.log(twoSum([0,1,2],3))

console.log(twoSum([3,2,4],6))