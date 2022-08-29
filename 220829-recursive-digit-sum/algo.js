//////////////////////////////////////////////
// 220829 recursive digit sum algo.js
//////////////////////////////////////////////

/**
 * @param(string) n
 * @param(integer) k
 * @returns(integer)
 */

function superDigit(n, k) {
    // Pseudo Code
    // This will be recursive
    // 1. build digit string by concatenating string n, k times
    // 2. iterate through each digit of digit string
    //      a. get the sum off the digits in digit string
    // 3. recursively call this function on the sum of the digit string
    console.log({n});
    console.log({k});

    // Variables
    let digitStr = "";
    let digitSum = 0;
    
    // build digit string by concatenating string n, k times
    for (let x=1; x <=k; x++) {
        digitStr += n;
    }

    console.log({digitStr});
    // recursive break
    if (digitStr.length === 1) {
        return parseInt(digitStr);
    }
    
    // Get the sum of digit string
    for (let digit of digitStr) {
        console.log({digit});
        digitSum += parseInt(digit);
    }
    console.log({digitSum});
    
    
    // recursively call this function on the sum of the digit string
    return superDigit(digitSum.toString(), 1);
}

console.log("******************************");
console.log("Recursive Digit Sum");
console.log("******************************\n");

const n1 = '9875';
const k1 = 1;
const expect1 = 2

console.log("N:", n1, "| K:", k1, "| Expected:", expect1);
console.log("Super Digit:", superDigit(n1, k1), "\n");

n = "148"
k = 3

returns = 3

const n2 = '148';
const k2 = 3;
const expect2 = 3

console.log("N:", n2, "| K:", k2, "| Expected:", expect2);
console.log("Super Digit:", superDigit(n2, k2), "\n");