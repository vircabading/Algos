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
    console.log({arr});

    // Variables
    let l2rSum = 0;
    let r2lSum = 0;
    let l2rIndex = 0;
    let r2lIndex = arr.length - 1;

    // Traverse the rows of the 2d array
    for (let row of arr) {
        console.log({row});
        l2rSum = l2rSum + row[l2rIndex];
        r2lSum = r2lSum + row[r2lIndex];
        l2rIndex++;
        r2lIndex--;
        console.log({l2rSum});
        console.log({r2lSum});
    }
    console.log({l2rSum});
    console.log({r2lSum});
}

console.log("****************************************");
console.log("Diagonal Difference Algorithm");
console.log("****************************************\n");

console.log("Arr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]");
console.log("Diagonal Difference:", diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));