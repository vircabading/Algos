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
    // Iterate through the queue from the back
    //      Note: the expected number is the index of the array + 1
    //      if the expected number is at the back
    //          remove the number at the back of the queue
    //          then move on to the next number at the back of the queue
    //      if the expected number is one away from the back of the queue
    //          add one to the number of moves used
    //          remove the expected number from where it's located in queue
    //      if the expected number is two away from the back of the queue
    //          add two to the number of moves used
    //          remove the expected number from where it's located in queue
    //      otherwise, then that means that the expected number
    //          is more than two places away from its original location
    //              therefore, 
    //                  print "Too chaotic"
    //                  exit the function
    // After the queue has been reduce to a single digit
    //      return the number of moves used
}


console.log("*******************************");
console.log("New Year Chaos Algorithm");
console.log("*******************************\n");

const q1 = [1, 2, 3, 5, 4, 6, 7, 8];
const expectedOut1 = 1;

console.log("Q:", q1, "| expected:", expectedOut1);
console.log("minimumBribes:", minimumBribes(q1));