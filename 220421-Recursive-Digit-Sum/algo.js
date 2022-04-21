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

    // Construct p by concatenating string n k times
    let p = "";
    for (let x=0; x<k; x++) {
        p += n;
    }
    console.log({p});

    // Retrieve each digit from p
    let digits = [];
    for (const char of p) {
        digits.push(parseInt(char));
    }
    console.log({digits});

    // Get the sum of all the digits
    let sum = 0;
    digits.map((digit) =>{
        sum += digit;
    });
    console.log({sum});

    
}


console.log("********************************");
console.log("Recursive Digit Sum Algorithm");
console.log("********************************\n");

console.log("superDigit('148', 3):", superDigit('148', 3));