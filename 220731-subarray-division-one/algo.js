///////////////////////////////////////////////
// 220731 subarray division one algo.js
///////////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 * The function is expected to return an INTEGER.
 */

function birthday(s, d, m) {
    // Pseudo Code
    // keep track of number of valid sub arrays found
    // note: valid sub array is length = m, sum = d
    // iterate through array m
    //      using a window with two pointers
    //          front pointer
    //          back pointer: m more than first pointer
    // get the sum of each sub array
    //      if the sum of this sub array = d, add to count
    // return count

    // Get the sum of the array
    const getSum = (arr) => {
        let sum = 0;
        for (let val of arr) {
            sum += val;
        }
        return sum;
    }

    let numValidSubArr = 0;         // Number of valid sub arrays
    let frontPt = 0;                // front pointer
    let backPt = m-1;       // back pointer

    while (backPt < s.length) {
        console.log({backPt});
        const sum = getSum(s.slice(frontPt, backPt+1));
        console.log({sum});
        if (sum === d) {
            numValidSubArr++;
        }
        frontPt++;
        backPt++;
    }

    return numValidSubArr;
}


console.log("*************************************");
console.log("Subarray Division One Algorithm");
console.log("*************************************\n");

const s1 = [2, 2, 1, 3, 2];
const d1 = 4;
const m1 = 2;

const s2 = [ 1, 2, 1, 3, 2 ];
const d2 = 3;
const m2 = 2;

console.log("S:", s1, "| Day:", d1, " | Month:", m1);
console.log("Number of valid subarrays:", birthday(s1, d1, m1), "\n");

console.log("S:", s2, "| Day:", d2, " | Month:", m2);
console.log("Number of valid subarrays:", birthday(s2, d2, m2), "\n");