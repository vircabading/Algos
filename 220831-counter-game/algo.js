/////////////////////////////////////////////////
// 220831 Counter Game algo.js
/////////////////////////////////////////////////

/**
 * @param {LONG_INTEGER} LONG_INTEGER n
 * @returns {String} STRING: winner, Louise or Richard.
 */

function counterGame(n) {
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

    /**
     * Determines if a number is a power of 2
     * @param {Integer} n 
     * @returns {Boolean} True or False
     */
    const isPowerOf2 = (n) => {
        return  (Math.log2(n) % 1) === 0;
    }

    let numTurns = 0;

    const countTurns = (num, numTurns) => {
        if (num === 1) {
            return numTurns;
        }
        if (isPowerOf2(num)) {
            return countTurns(num/2, numTurns+1)
        } else {
            let curNum = Math.pow(2, Math.trunc( Math.log2(num) ));
            return countTurns( num- curNum, numTurns+1 );
        }
    }

    numTurns = countTurns(n, numTurns);

    if ((numTurns % 2) === 1) {
        return "Louise";
    }
    return "Richard";
}

console.log("*********************************"); 
console.log("Counter Game Algorithm"); 
console.log("*********************************\n"); 

const n1 = 6;
const expected1 = "Richard";

console.log("N:", n1, "| Expected return:", expected1);
console.log("Counter Game:", counterGame(n1) , "\n")

const n2 = 132;
const expected2 = "Louise";

console.log("N:", n2, "| Expected return:", expected2);
console.log("Counter Game:", counterGame(n2) , "\n")

