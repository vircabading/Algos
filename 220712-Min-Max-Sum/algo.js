//////////////////////////////////////////////////
// 220712 Min Max Total Algorithm algo.js
//////////////////////////////////////////////////

/**
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Pseudo Code
    // Iterate through the array
    //   while iterating through the array
    //      1. Find the smallest integer in the array
    //      2. Find the largest integer in the array
    //      3. Find the total of all the integers in array
    // A. Smallest possible total = total - largest int in array
    // B. Largest possible total = total - smallest int in array

    // Initialize variables
    let total = 0;
    let minNum = arr[0];
    let maxNum = arr[0];
    
    // Iterate through the array
    for (let val of arr) {
        total = total + val;    // Find the total of all integers in array
        if (val < minNum) {     // Find smallest integer in array
            minNum = val;
        }
        if (val > maxNum) {     // Find largest integer in array
            maxNum = val;
        }
    }

    // Calculate min and max possible sums
    const minSum = total - maxNum;
    const maxSum = total - minNum;
    console.log(minSum, maxSum);
}

console.log("*****************************************");
console.log("Min Max Algorithm");
console.log("*****************************************\n");

console.log("miniMaxSum([1, 3, 5, 7, 9])");
miniMaxSum([1, 3, 5, 7, 9]);

console.log("miniMaxSum([1, 2, 3, 4, 5])");
miniMaxSum([1, 2, 3, 4, 5]);