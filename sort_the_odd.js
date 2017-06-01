// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  const odds =(array.filter(function (number){ 
    return number % 2 !== 0
  }
)).sort((a,b) => a-b)//create a sorted array of only odd numbers



  
const result =array.map(number=> {
  if(number % 2 !== 0){
    number = odds.shift()
      
    }
    return number 
  })
  
  return result
} //create new array by replacing odd numbers in original array with odd numbers from 'odds' array which have been sorted thus all odds in new array will be sorted 


sortArray([5, 3, 2, 8, 1, 4])