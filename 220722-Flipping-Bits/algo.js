///////////////////////////////////////////////////////
// 220722 Flipping Bits Algo.js
///////////////////////////////////////////////////////

/**
 * The function accepts LONG_INTEGER n as parameter.
 * The function is expected to return a LONG_INTEGER.
 */

function flippingBits(n) {
    // Pseudo Code
    // subtract n from maximum 32 bit int (4294967295)
    // return the answer
    console.log({n});

    const maxNum = 4294967295;
    return maxNum - n;
}

console.log("********************************");
console.log("Flipping Bits Algorithm");
console.log("********************************\n");

console.log("flippingBits(9):", flippingBits(9), "\n");

console.log("flippingBits(1):", flippingBits(1), "\n");

console.log("flippingBits(0):", flippingBits(0), "\n");