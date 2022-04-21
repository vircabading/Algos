///////////////////////////////////////////////
//  220421 Recursive Digit Sum algo.js
///////////////////////////////////////////////

/**
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Pseudo Code
    // 1. Construct p by concatenating string n k times
    // 2. Retrieve each digit from p
    // 2.A Iterate through string p to create an array of single digit ints from p
    // 3. Get a sum of all the digits
    // This should be recursive
    // A. Base Case
    //      n length = 1 and k = 1, return n as a integer
    // B. Recursive Case
    //      Recursively call superDigit on the sum of all the digits of p

    // Recursive Base Case
    if (n.length == 1 && k == 1) {
        return parseInt(n);
    }

    // Construct p by concatenating string n k times
    let p = "";
    for (let x=0; x<k; x++) {
        p += n;
    }

    // Retrieve each digit from p
    let digits = [];
    for (const char of p) {
        digits.push(parseInt(char));
    }

    // Get the sum of all the digits
    let sum = 0;
    digits.map((digit) =>{
        sum += digit;
    });

    // Recursive Case: Recursively call superDigit on the sum
    if (sum < 10) {         // Edge case, sum is only on digit
        return sum;
    }
    return superDigit(sum.toString(), 1);
}


console.log("********************************");
console.log("Recursive Digit Sum Algorithm");
console.log("********************************\n");

console.log("superDigit('148', 3):", superDigit('148', 3));
console.log("superDigit('9875', 4):", superDigit('9875', 4));