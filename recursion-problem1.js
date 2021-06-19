// Recursion: Problem 1
// Module 3: Javascript
// Write a JavaScript function to calculate the factorial of a number.


function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));