//////////////////////////////////////////////////////
// 221014 Sherlock and the Valid String algo.js
//////////////////////////////////////////////////////

/**
 * The function accepts STRING s as parameter.
 * The function is expected to return a STRING.
 */

function isValid(s) {
    console.log({s});
    // Pseudo Code
    // Create a hash map of all the letters in the string s
    // Iterate through the has map to find
    //      1. Sum of number of occurences
    //      2. Number of different letters
    //      3. Highest number of occurences
    //      4. Lowest number of occurences
    // Evaluate the values found
    //      1. If sum modulus number of letters equals zero
    //          and the highest and lowest num of occurences is the same
    //              Then return "YES"
    //      2. If sum modulus numver of letters equals one
    //          and the highest num of occurences is only one more than the
    //          lowest number of occurences
    //              Then return "Yes"
    //      3, All other cases return "No"

    if (s.length === 1) {
        return "YES"
    }

    return "NO";
}

console.log("*******************************************");
console.log("Sherlock and the Valid String Algorithm");
console.log("*******************************************\n");

const s1 = 'a';
const expect1 = 'YES';

console.log("String:", s1, "| Expected return:", expect1);
console.log("Is Valid String:", isValid(s1), "\n");