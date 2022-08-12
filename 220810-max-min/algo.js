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

    // Sort Array in ascending order
    arr.sort((a,b)=>{return a-b});

    // Initialize variables
    //      Variable to keep track of Minimum Unfairness found
    //      Pointer to start of arr' being evaluated
    //      Pointer to end of arr' that is k away from start pointer
    let minUnfair = arr[arr.length-1];
    let startPtr = 0;
    let endPtr = k-1;

    // Iterate through array arr to find each possible arr' using the
    //      start and end pointers
    //          Evaluate each arr' for its amount of unfairness
    //          Memorize the smallest unfairness found
    while (endPtr < arr.length) {
        const unfairness = arr[endPtr] - arr[startPtr];
        if (unfairness < minUnfair) {
            minUnfair = unfairness;
        }
        startPtr++;
        endPtr++;
    }

    // Return minimum unfairness found
    return minUnfair;
}

console.log("*************************************")
console.log("Max Min Algorithm")
console.log("*************************************\n")

const arr1 = [1, 4, 7, 2];
const k1 = 2;

const arr2 = [20, 30 , 40, 1, 2, 3, 4, 10, 100, 200]
const k2 = 4

const arr3 = [10, 100, 300, 200, 1000, 20, 30];
const k3 = 3;

const arr4 = [1, 2, 1, 2, 1];
const k4 = 2;

console.log(".:: K:", k1, "| array:", arr1,"::.");
console.log("Minimum unfairness:", maxMin(k1, arr1), "\n");

console.log(".:: K:", k2, "| array:", arr2,"::.");
console.log("Minimum unfairness:", maxMin(k2, arr2), "\n");

console.log(".:: K:", k3, "| array:", arr3,"::.");
console.log("Minimum unfairness:", maxMin(k3, arr3), "\n");

console.log(".:: K:", k4, "| array:", arr4,"::.");
console.log("Minimum unfairness:", maxMin(k4, arr4), "\n");