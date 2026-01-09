/* 
Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.

Example:
Input: "hello"
Output: "olleh"

*/

function reverseString(str) {
    const result = str.split('').reverse().join('');
    return result;
}
const str = "hello";
const result =reverseString(str)
console.log(result);