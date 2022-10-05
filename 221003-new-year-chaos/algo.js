/////////////////////////////////////
// 221003 New Year Chaos algo.js
/////////////////////////////////////

/**s
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Pseudo Code
    // Create place holder variables
    //      keep track of number of moves used
    // Iterate through the que from the back
    //      Note: the expected number is the index of the array + 1
    //      if the expected number is at the back
    //          remove the number at the back of the queue
    //          then move on to the next number at the back of the queue
    //      
}

console.log("*******************************");
console.log("New Year Chaos Algorithm");
console.log("*******************************\n");

const q1 = [1, 2, 3, 5, 4, 6, 7, 8];
const expectedOut1 = 1;

console.log("Q:", q1, "| expected:", expectedOut1);
console.log("minimumBribes:", minimumBribes(q1));