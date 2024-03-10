// Anonymous function
let printOddNumbers = function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  };
  
  // IIFE
  (function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  })([1, 2, 3, 4, 5]);
  Convert all the strings to title caps in a string array:
  javascript
  Copy code
  // Anonymous function
  let convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  };
  
  // IIFE
  let titleCapsArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  })(['apple', 'banana', 'cherry']);
  console.log(titleCapsArray);
  Sum of all numbers in an array:
  javascript
  Copy code
  // Anonymous function
  let sumArray = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  // IIFE
  let totalSum = (function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  })([1, 2, 3, 4, 5]);
  console.log(totalSum);