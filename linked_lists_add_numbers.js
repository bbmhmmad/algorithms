//   You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


  // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;}
  var l1 = new ListNode(2)
  l1.next = new ListNode(4)
  l1.next.next = new ListNode(3) 
  
  console.log(l1)
  
  var l2 = new ListNode(5)
  l2.next = new ListNode(6)
  l2.next.next = new ListNode(4) 





var addTwoNumbers = function(l1, l2) {
    var arr_one = []
    var runner = l1
    while(runner !== null ){
      arr_one.push(runner.val)
      runner=runner.next
    } //iterate thru linked list using while loop and add to arr_one
    

    console.log('L2', l2)
    var arr_two = []
    var runner2 = l2
    while(runner2 !== null ){
      arr_two.push(runner2.val)
      runner2=runner2.next
    }//iterate thru linked list using while loop and add to arr_two
    

    var number = Number(arr_one.reverse().join('')) + Number (arr_two.reverse().join(''))//sum both lists. results in 3 digit number
    
    number = number.toString().split('').reverse()//make number into string in order to split and make array 
    
    return number.map(function(item){
        return Number(item) //iterate thru each element in array change type to number
    })
};

console.log(addTwoNumbers(l1,l2))//expected output[7,0,8]