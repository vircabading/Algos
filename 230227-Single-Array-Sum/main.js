///////////////////////////////////////
// 230227 Single Array Sum Algorithm main.js
///////////////////////////////////////

/**
 * *** Simple Array Sum the finds the sum of an array of integers ***
 * @param {Array of integers} ar 
 */
function simpleArraySum(ar) {
    // Pseudo Code
    // 1. Iterate through the array of integers
    // 2. Add each array in the integer into a sum
    // 3. Return the sum

    let sum = 0;
    for (let i=0; i< ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

console.log("***************************");
console.log("Single Array Sum Algorithm");
console.log("***************************\n");

let arrayOfInts = [1,2,3,4,10,11];

console.log("*** Array of Integers:", arrayOfInts, "***");
console.log("Sum:", simpleArraySum(arrayOfInts));