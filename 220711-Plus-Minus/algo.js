////////////////////////////////////////////////////
// Plus Minus Algorithm
////////////////////////////////////////////////////

/**
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Initialize variables
    const totNum = arr.length;
    let numPos = 0;
    let numNeg = 0;
    let numZero = 0;

    // Iterate through the array
    for (let val of arr) {
        // count if positive, negative or zero
        if (val > 0) {
            numPos++;
        } else if (val < 0) {
            numNeg++;
        } else {
            numZero++;
        }
    }

    // Calculaste Ratios
    const posRatio = numPos / totNum;
    const negRatio = numNeg / totNum;
    const ZeroRatio = numZero / totNum;

    // Output Ratios
    console.log("Positive Ratio:", posRatio.toFixed(6));
    console.log("Negative Ratio:", negRatio.toFixed(6));
    console.log("Zero Ratio:", ZeroRatio.toFixed(6));
}

console.log("************************************");
console.log("Plus Minus Algorithm");
console.log("************************************\n");

console.log("plusMinus([1, 1, 0, -1, -1]):");
plusMinus([1, 1, 0, -1, -1])

console.log("\nplusMinus([-4, -3, -9, 0, 4, 1]):");
plusMinus([-4, -3, -9, 0, 4, 1])