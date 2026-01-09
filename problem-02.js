/* 
Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

Example:
Input: "programming"
Output: 3

*/

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('programing'))