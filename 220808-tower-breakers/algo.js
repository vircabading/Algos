///////////////////////////////////////////
// 220808 Tower Breakers Algo.js
///////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 * The function is expected to return an INTEGER.
 */

function towerBreakers(n, m) {
    // Pseudo Code
    // if m = 1, player 2 wins
    // otherwise:
    //      if n is odd, player 1 wins
    // else player 2 wins
    const numTowers = n;
    const towerHeight = m;

    if (towerHeight === 1) {
        return 2;
    } else if (numTowers % 2 === 1) {
        return 1;
    }
    return 2;
}

console.log("*******************************");
console.log("Tower Breakers Algorithm");
console.log("*******************************\n");

const n1 = 2;
const m1 = 6;

const n2 = 2;
const m2 = 2;

const n3 = 1;
const m3 = 4;

console.log("*** N:", n1, "| M:", m1, "***");
console.log("Tower Breaker:", towerBreakers(n1, m1), "\n");

console.log("*** N:", n2, "| M:", m2, "***");
console.log("Tower Breaker:", towerBreakers(n2, m2), "\n");

console.log("*** N:", n3, "| M:", m3, "***");
console.log("Tower Breaker:", towerBreakers(n3, m3), "\n");