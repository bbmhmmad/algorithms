// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(...array){//use rest operator to combine arguments into array
  let max = array[0] //save first value as current max digit value

  array.forEach(number => {//use forEach helper to iterate thru and convert each number into string so we can get length and compare to curent max length
    let numberString = number.toString()
    if(numberString.length>max.toString().length){
      max = Number(numberString)//convert string back to number 
      
    }
    
  })
  return max //after comparing all value lengths we return max value
}

console.log(findLongest(1,1005,100))//logs 1005 since has 4 digits



// const findLongest = l => l
//   .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

//clever solution uses reduce and string template rather than toString() to convert number to string and get length property.
