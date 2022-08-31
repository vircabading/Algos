/////////////////////////////////////////////////
// 220831 Counter Game algo.js
/////////////////////////////////////////////////

/**
 * @param {LONG_INTEGER} LONG_INTEGER n
 * @returns {String} STRING: winner, Louise or Richard.
 */

function counterGame(n) {
    console.log({n});
    // Pseudo Code
    // Game Mechanic
    //      if num is 1, game is overs
    //      if num is NOT a power of 2
    //          find the next lower number that is a power of 2
    //          then subtract that number from num
    //      if num IS a power of 2
    //          divide num by 2
    // Create a function which will play the game
    //      and returns the number of steps needed to end the game

}

console.log("*********************************"); 
console.log("Counter Game Algorithm"); 
console.log("*********************************\n"); 

const n1 = 6;
const expected1 = "Richard";

console.log("N:", n1, "| Expected return:", expected1);
console.log("Counter Game:", counterGame(n1) , "\n")