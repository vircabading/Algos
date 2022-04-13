/////////////////////////////////////////////
//  220413 Diagonal Difference Algo.js
/////////////////////////////////////////////

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Pseudo Code:
    // 1. Get the sum of the Left to Right Diagonal
    // 2. Get the sum of the Right to Left Diagonal
    // 3. Get the absolute difference betweent the two diagonal sums

    // Variabes
    let sumLeftToRight = 0;
    let SumRightToLeft = 0;

    // Get the array length
    let arrLength = arr.length;
    console.log({arrLength});

    // Iterate through the array
    for (let x=0; x<arrLength; x++) {
        // Get the Sum of the Left to Right Diagonal
        sumLeftToRight += arr[x][x];

        console.log("Arr:", arr[x], "| Sum L to R:", sumLeftToRight);
    }
}

console.log("Diagonal Difference: [[11,2,4],[4,5,6],[10, 8, -12]]", diagonalDifference([[11,2,4],[4,5,6],[10, 8, -12]]));