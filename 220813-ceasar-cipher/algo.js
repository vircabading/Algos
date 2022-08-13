//////////////////////////////////////////////
// 220813 Ceaser Cipher algo.js
//////////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 * The function is expected to return a STRING.
 */

function caesarCipher(s, k) {
    // Pseudo Code
    // Create a map of the alphabet
    // Initialize variables
    //      Output String
    //      
    // Iterate through the string
    //      for each letter in the string
    //          determine if it is a capital or lower case letter
    //          shift the letter by #k
    //          memorize the shifted letter to output string
    // Return Output string
}

console.log("***********************************");
console.log("Ceasar Cipher Algorithm");
console.log("***********************************\n");

const s1 = "There's-a-starman-waiting-in-the-sky";
const k1 = 3;
const returns1 = "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb";

console.log("String:", s1, "| K:", k1);
console.log("Expected return:", returns1);
console.log("Ceasar Cipher:", caesarCipher(s1, k1), "\n");