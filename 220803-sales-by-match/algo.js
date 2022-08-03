///////////////////////////////////////////
// 220803 Sales by Match algo.js
///////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 * The function is expected to return an INTEGER.
 */

function sockMerchant(n, ar) {
    console.log({n});
    console.log({ar});
    // Pseudo Code
    // Initialize sales count at 0
    // Create a map of socks
    // Iterate through the array of socks
    // For each sock
    //      1. Map it
    //      2. For each two socks mapped, increase the sales count
    // Return the sales count

    let salesCount = 0;
    const sockMap = {};

    for (let sock of ar) {
        console.log({sock});
        if (!sockMap[sock]) {
            sockMap[sock] = 1;
        }
    }

    console.log({sockMap});
    return salesCount;
}

console.log("******************************");
console.log("Sales by Match Algorithm");
console.log("******************************\n");

const n1 = 7;
const ar1 = [1, 2, 1, 2, 1, 3, 2];

console.log("N:", n1, "| ar:", ar1);
console.log("Sales by match:", sockMerchant(n1, ar1), "\n");