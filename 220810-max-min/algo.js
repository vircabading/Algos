////////////////////////////////////////
// 220810 Max Min Algorithm Read Me
////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 * The function is expected to return an INTEGER.
 */

function maxMin(k, arr) {
    // Pseudo Code
    // Sort Array in ascending order
    // Initialize variables
    //      Variable to keep track of Minimum Unfairness found
    //      Pointer to start of arr' being evaluated
    //      Pointer to end of arr' that is k away from start pointer
    // Iterate through array arr to find each possible arr' using the
    //      start and end pointers
    //          Evaluate each arr' for its amount of unfairness
    //          Memorize the smallest unfairness found
    // Return minimum unfairness found
}

console.log("*************************************")
console.log("Max Min Algorithm")
console.log("*************************************\n")

const arr1 = [1, 4, 7, 2];
const k1 = 2;

console.log(".:: K:", k1, "| array:", arr1,"::.");
console.log("Minimum unfairness:", maxMin(k1, arr1));