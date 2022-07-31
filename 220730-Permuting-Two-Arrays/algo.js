/////////////////////////////////////////////////////
// 220730 Permuting Two Arrays algo.js
/////////////////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 * The function is expected to return a STRING.
 */

function twoArrays(k, A, B) {
    // Pseudo Code
    // Sort array A in descending order
    // Sort array B in descending order
    // Go through array A and B incrementally
    //      check if A[x]]+ B[x] >= k
    //          if false, return "NO"
    // if go through full length of arrays and no false comes up
    //      then return "YES"

    const sortedA = A.sort( (a,b) => b-a );
    const sortedB = B.sort( (a,b) => a-b );

    console.log({sortedA});
    console.log({sortedB});
    
    for (let x=0; x<sortedA.length; x++) {
        if (sortedA[x] + sortedB[x] < k) {
            console.log(sortedA[x], sortedB[x]);
            return "NO";
        }
    }

    return "YES"
}

console.log("***********************************");
console.log("Permuting Two Arrays Algorithm");
console.log("***********************************\n");

const A1 = [0, 1];
const B1 = [0, 2];
const k1 = 1;

const k2 = 10;
const A2 = [2, 1, 3];
const B2 = [7, 8, 9];

const k3 = 5;
const A3 = [1, 2, 2, 1];
const B3 = [3, 3, 3, 4];

const k5 = 94;
const A5 = [84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2];
const B5 = [53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19];

const k4 = 91;
const A4 = [18, 73, 55, 59, 37, 13, 1, 33];
const B4 = [81, 11, 77, 49, 65, 26, 29, 4];

console.log("Two Arrays: A", A1, "| B:", B1,"| k:", k1);
console.log(twoArrays(k1, A1, B1), "\n");

console.log("Two Arrays: A", A2, "| B:", B2,"| k:", k2);
console.log(twoArrays(k2, A2, B2), "\n");


console.log("Two Arrays: A", A3, "| B:", B3,"| k:", k3);
console.log(twoArrays(k3, A3, B3), "\n");

console.log("Two Arrays: A", A4, "| B:", B4,"| k:", k4);
console.log(twoArrays(k4, A4, B4), "\n");

console.log("Two Arrays: A", A5, "| B:", B5,"| k:", k5);
console.log(twoArrays(k5, A5, B5), "\n");