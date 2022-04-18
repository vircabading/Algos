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

    // Rotate the alphabet
    let rotatedAlphabet = "";
    for (let count=0; count < 26; count++) {
        rotatedAlphabet += alphabet.charAt(((count+k-1))%26);
    }
    console.log({rotatedAlphabet});

    // Convert the inputed string according to the rotated alphabet
    let result = "";
    for (char of s) {                                   // iterate through string s
        let lowerChar = char.toLowerCase();
        let idxOfChar = alphabet.indexOf(lowerChar);
        let rotatedChar = char;
        if (idxOfChar >= 0) {
            if (char == char.toLowerCase()) {
                rotatedChar = rotatedAlphabet[idxOfChar];
            } else {
                rotatedChar = rotatedAlphabet[idxOfChar];
                rotatedChar = rotatedChar.toUpperCase();
            }
        }
        console.log("char:", char, "|| rotated:", rotatedChar);
        console.log({lowerChar});
        console.log({idxOfChar});
    }
    return result;
}

console.log("/////////////////////////////");
console.log("// Ceasar Cipher Also.js");
console.log("/////////////////////////////\n");

console.log("ceasarCipher('middle-Outz', 2):", caesarCipher('middle-Outz', 3));