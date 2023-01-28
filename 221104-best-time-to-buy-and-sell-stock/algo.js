//////////////////////////////////////////////////////
// 221104 Best Time to Buy and Sell Stock algo.js
//////////////////////////////////////////////////////

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // Pseudo Code
    // Initialize Variables
    //      minVal = first price
    //      maxProfit = zero
    // Iterate through each price in prices
    //      1. if the current price is less than minVal,
    //          A. Current price becomes new minVal
    //      2. get currentMaxProfit
    //          A. which is: current price minus minVal
    //      3. if currentMaxProfit is greater than maxProfit
    //          A. currentMaxProfit becomes the maxProfit
    // return the maxProfit

    let minVal = prices[0];
    let maxProfit = 0;

    for (curPrice of prices) {
        if (curPrice < minVal) {
            minVal = curPrice;
        }
        const curMaxProfit = curPrice - minVal;
        if (curMaxProfit > maxProfit) {
            maxProfit = curMaxProfit;
        }
    }

    return maxProfit;
};

console.log("***********************************");
console.log("Best Time to Buy and Sell Stock");
console.log("***********************************\n");

const prices1 = [7, 1, 5, 3, 6, 4];
const expOutput1 = 5;

console.log("**** Prices:", prices1, "| Expected:", expOutput1, "********");
console.log("Max profit:", maxProfit(prices1), "\n");

const prices2 = [7, 6, 4, 3, 1];
const expOutput2 = 0;

console.log("**** Prices:", prices2, "| Expected:", expOutput2, "********");
console.log("Max profit:", maxProfit(prices2), "\n");