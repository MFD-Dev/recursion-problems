
// Next Lesson
// Recursion: Problem 2
// Module 3: JavaScript
// Write a JavaScript program to compute the sum of an array of integers.


var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1,2,3,4,5,6]));