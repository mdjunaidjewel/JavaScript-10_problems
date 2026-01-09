/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:
Input: [5, 1, 9, 3]
Output: 9

*/

function findMax(numbers) {
  let max = numbers[0];

  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

// Example usage
console.log(findMax([5, 1, 9, 3]));

