///////////////////////////////////////////////
//  220418 Ceasar Cipher algo.js
///////////////////////////////////////////////

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Pseudo Code
    // Rotate the Alphabet
    // Convert the inputed string according to the rotated alphabet

    // Create Original Alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
        console.log("Original Alphabet:", alphabet);

    // Traverse original alphabet
    // for (char of alphabet) {
    //     console.log(char);
    // }

    console.log(alphabet.indexOf('c'));

    // Rotate the alphabet
    let rotatedAlphabet = "";
    for (let count=1; count <= 26; count++) {
        
    }
}

console.log("/////////////////////////////");
console.log("// Ceasar Cipher Also.js");
console.log("/////////////////////////////\n");

console.log("ceasarCipher('middle-Outz', 2):", caesarCipher('middle-Outz', 2));