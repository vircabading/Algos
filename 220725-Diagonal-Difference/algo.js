////////////////////////////////////////////////////////
// 220725 Diagonal Difference algo.js
////////////////////////////////////////////////////////

/**
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * The function is expected to return an INTEGER.
 */

function diagonalDifference(arr) {
    // Pseudocode
    // Add up the two diagonals from the 2d array
    // Do this using an index moving left to right
    //    and an index moving from right to left
    //    while traversing the rows of the 2d array
    // Return the absolute Difference of the two sums
    
    // Variables
    let l2rSum = 0;
    let r2lSum = 0;
    let l2rIndex = 0;
    let r2lIndex = arr.length - 1;
    
    // Traverse the rows of the 2d array
    for (let row of arr) {
        l2rSum = l2rSum + row[l2rIndex];
        r2lSum = r2lSum + row[r2lIndex];
        l2rIndex++;
        r2lIndex--;
    }
    
    // Return the absolute Difference of the two sums
    let absDiff = 0;
    if (l2rSum >= r2lSum) {
        absDiff = l2rSum - r2lSum;
    } else {
        absDiff = r2lSum - l2rSum;
    }
    return absDiff;
}

console.log("****************************************");
console.log("Diagonal Difference Algorithm");
console.log("****************************************\n");

let arr1 = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
let arr2 = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

console.log("Arr:", arr1);
console.log("Diagonal Difference:", diagonalDifference(arr1), "\n");
console.log("Arr:", arr2);
console.log("Diagonal Difference:", diagonalDifference(arr2), "\n");