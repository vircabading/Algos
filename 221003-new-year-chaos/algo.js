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

    // Variables
    let numMoves = 0;

    // Iterate through the queue
    while (q.length > 1) {
        const expectedNum = q.length;   // expected number is the index of the array + 1
        console.log({expectedNum});

        // if the expected number is at the back
        //     remove the number at the back of the queue
        //     then move on to the next number at the back of the queue
        if (expectedNum === q[q.length-1]) {
            console.log("Popping:", q[q.length-1]);
            q.pop();
            continue;
        } 
        
        // if the expected number is one away from the back of the queue
        //      add one to the number of moves used
        //      remove the expected number from where it's located in queue
        else if (expectedNum === q[q.length-2]) {
            numMoves++;
            q.splice(q.length-2, 1);
            console.log("expected num found one away from original position");
            console.log({q});
            continue;
        }
        
        // if the expected number is two away from the back of the queue
        //     add two to the number of moves used
        //     remove the expected number from where it's located in queue
        else if (expectedNum === q[q.length-3]) {
            numMoves= numMoves + 2;
            q.splice(q.length-3, 1);
            console.log("expected num found two away from original position");
            console.log({q});
            continue;
        }

        console.log("Popping:", q[q.length-1]);
        q.pop();
        console.log({q});
    }

    // After the queue has been reduce to a single digit
    //      return the number of moves used
    return numMoves;
}


console.log("*******************************");
console.log("New Year Chaos Algorithm");
console.log("*******************************\n");

const q1 = [1, 2, 3, 5, 4, 6, 7, 8];
const expectedOut1 = 1;

console.log("Q:", q1, "| expected:", expectedOut1);
console.log("minimumBribes:", minimumBribes(q1));