/////////////////////////////////////////////
// 221102 CLimbing Stairs algo.js
/////////////////////////////////////////////

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = (n) => {
    console.log({n});
    // base case
    if (n <= 2) {
        return n;
    }
    let one = 1;
    let two = 1;
    for (let i=0; i <= n-1; i++) {
        console.log({i});
    }
};

console.log("***********************************");
console.log("Climbing Stairs Algorithm");
console.log("***********************************\n");

const n1 = 2
const exp1 = 2

console.log("N:", n1, "| expected output:", exp1);
console.log("Solution:", climbStairs(n1), "\n");

const n2 = 3
const exp2 = 3

console.log("N:", n2, "| expected output:", exp2);
console.log("Solution:", climbStairs(n2), "\n");