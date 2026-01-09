/*

Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:
Input: "madam"
Output: true
Input: "hello"
Output: false

*/

function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Reverse the string
  const reversedStr = cleanedStr.split("").reverse().join("");
  
  // Check if original and reversed are the same
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"));
