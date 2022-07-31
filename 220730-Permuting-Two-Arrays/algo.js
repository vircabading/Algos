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
    console.log({k});
    console.log({A});
    console.log({B});
    // Pseudo Code
    // Sort array A in descending order
    // Sort array B in descending order
    // Go through array A and B incrementally
    //      check if A[x]]+ B[x] >= k
    //          if false, return "NO"
    // if go through full length of arrays and no false comes up
    //      then return "YES"

}

console.log("***********************************");
console.log("Permuting Two Arrays Algorithm");
console.log("***********************************\n");

const A1 = [0, 1];
const B1 = [0, 2];
const k1 = 1;

console.log("Two Arrays: A", A1, "| B:", B1,"| k:", k1);
console.log(twoArrays(A1, B1, k1));