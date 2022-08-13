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

    // Variables
    const alphaMap = {
        'a': 0, 'b':1, 'c':2, 'd': 3, 'e':4, 'f':5, 'g': 6, 'h':7, 'i':8, 'j': 9, 'k':10, 'l':11, 'm': 12, 'n':13, 'o':14, 'p': 15, 'q':16, 'r':17, 's': 18, 't':19, 'u':20, 'v': 21, 'w':22, 'x':23, 'y':24, 'z':25
    };
    const alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let output = "";

    

    return output;
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