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
        console.log({val});
        // count if positive, negative or zero
        if (val > 0) {
            numPos++;
        } else if (val < 0) {
            numNeg++;
        } else {
            numZero++;
        }
    }

    console.log({arr});
    console.log({totNum});
    console.log({numPos});
    console.log({numNeg});
    console.log({numZero});
}

console.log("************************************");
console.log("Plus Minus Algorithm");
console.log("************************************\n");

console.log("plusMinus([1, 1, 0, -1, -1]):");
plusMinus([1, 1, 0, -1, -1])