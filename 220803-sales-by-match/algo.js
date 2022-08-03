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
        if (!sockMap[sock]) {
            sockMap[sock] = 1;
        } else {
            let count = sockMap[sock] + 1
            sockMap[sock] = count;
            if (count % 2 === 0) {
                salesCount++;
            }
        }
    }

    return salesCount;
}

console.log("******************************");
console.log("Sales by Match Algorithm");
console.log("******************************\n");

const n1 = 7;
const ar1 = [1, 2, 1, 2, 1, 3, 2];

const n2 = 9;
const ar2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const n3 = 10;
const ar3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log("N:", n1, "| ar:", ar1);
console.log("Sales by match:", sockMerchant(n1, ar1), "\n");

console.log("N:", n2, "| ar:", ar2);
console.log("Sales by match:", sockMerchant(n2, ar2), "\n");

console.log("N:", n3, "| ar:", ar3);
console.log("Sales by match:", sockMerchant(n3, ar3), "\n");