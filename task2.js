const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5]);


  const convertToTitleCaps = (arr) => {
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
  };
  
  const titleCapsArray = convertToTitleCaps(['apple', 'banana', 'cherry']);
  console.log(titleCapsArray);

  const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  const totalSum = sumArray([1, 2, 3, 4, 5]);
  console.log(totalSum);

  const getPrimeNumbers = (arr) => {
    return arr.filter((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
  const primeNumbersArray = getPrimeNumbers([2, 3, 5, 7, 11, 13, 17]);
  console.log(primeNumbersArray);

  const getPalindromes = (arr) => {
    return arr.filter((str) => str === str.split('').reverse().join(''));
  };
  
  const palindromeArray = getPalindromes(['level', 'deed', 'hello', 'world']);
  console.log(palindromeArray);