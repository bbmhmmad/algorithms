// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
 const filtered = list.map(function(item){
 	//filter list of numbers in between ranges.ie only keeping isolated numbers and low and highpoints of ranges
   if(item - (list[list.indexOf(item) - 1]) !== 1 && list[list.indexOf(item) + 1 ] - item === 1){
     return item.toString()//make lowpoint in range a string to identify for later using typeof
   }
    else if(item - list[list.indexOf(item) - 1] !== 1 || list[list.indexOf(item) + 1 ] - item !==1){
     return item
   }
 }) 
 //filter undefined values
 const ranges = filtered.filter(item=>{
   return item !==undefined
 })
 //find string values in array which represent low points of range and use string templates to make ranges
const final = ranges.map(item=>{
  if(item === ranges[0] && typeof item == 'string'){
    return `${item}-${ranges[(ranges.indexOf(item) + 1)]}`
  }
  else if(item === ranges[0] && !(typeof item == 'string')){
    return `${item}`
  }
  else if(typeof item == 'string'){
    return `${item}-${ranges[(ranges.indexOf(item) + 1)]}`
  }
})
 //filter for undefined values once more and join so we end up with one string of values
 return final.filter(item=>{
   return item !==undefined
 }).join()
}

let result = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

console.log(result)