/////////////////////////////////////////
// 220729 Pangram Algorithm algo.js
/////////////////////////////////////////

/**
 * The function accepts STRING s as parameter.
 * The function is expected to return a STRING.
 */

function pangrams(s) {
    console.log({s});
    // Pseudo Code
    // Create a map of all 26 letres initialized to value of zero
    // Iterate through string s and each time a letter is encountered, add it to map
    //     if when mapping a letter it's value is initially zero
    //          then add one to the letters found count
    // If the letters found count = 26, return "pangram"
    //     otherwise return "not pangram"
}

console.log("***************************************");
console.log("Pangrams Algorithm");
console.log("***************************************\n");

s1 = "The quick brown fox jumps over the lazy dog"

console.log("s =", s1);
console.log("", pangrams(s1), "\n");