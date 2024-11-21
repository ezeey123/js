// Reverse a string
function reverseString(name) {
    return name.split('').reverse().join('');
}

console.log(reverseString("brown"));

// counting the strings
function countString(str) {
    return str.length
}

console.log(countString("brown"));

// capitalizeWords
function capitalizeWords(sentence) {
    return sentence
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '); 
}

console.log(capitalizeWords("brown"));

// maximum and minimum array

function findMax(num1) {
    return Math.max(...num1);
}


function findMin(num1) {
    return Math.min(...num1);
}

let num = [3,5,89,90,10];
console.log(findMax(num));
console.log(findMin(num));


function sumOfArray(nums) {
    let sum = 0;    
     for (let num of nums) {
          sum += num;
     }
     return sum;
}

let i = [3,5,89,90,10];
console.log(sumOfArray(i));


function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = filterArray(numbers, num => num > 5);  
  console.log(filteredNumbers); 
  
  const words = ["apple", "banana", "cherry", "date"];
  const filteredWords = filterArray(words, word => word.startsWith('b'));  
  console.log(filteredWords); 
  

  function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  console.log(factorial(5)); 
  console.log(factorial(0));  
  console.log(factorial(7));  
  console.log(factorial(-3)); 


  function isPrime(n) {
    if (n <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  
  // Example usage:
  console.log(isPrime(2));  
  console.log(isPrime(3));  s
  console.log(isPrime(4));  
  console.log(isPrime(29)); 
  console.log(isPrime(1));  
  console.log(isPrime(0));  
  

  function generateFibonacci(n) {
    if (n <= 0) {
      return []; 
    }
    
    const fibonacci = [0]; 
  
    if (n === 1) {
      return fibonacci; 
    }
  
    fibonacci.push(1); 
  
    for (let i = 2; i < n; i++) {
      
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  
    return fibonacci;
  }
  
  // Example usage:
  console.log(generateFibonacci(5)); 
  console.log(generateFibonacci(10)); 
  console.log(generateFibonacci(1));  
  console.log(generateFibonacci(0));  
  
  