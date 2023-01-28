// 30 days of code: day 2 - operations, algo.js

/**
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Convert tip and tax from integers to percentages
    tip_percent = tip_percent / 100;
    tax_percent = tax_percent / 100;

    console.log({meal_cost});
    console.log({tip_percent});
    console.log({tax_percent});

    // Calculate tip amount
    let tipAmount = meal_cost * tip_percent;
    console.log({tipAmount});
}

console.log("*****************************");
console.log("30 days of code: Day 2 Operations\n");

let mealCost1 = 100;
let tipPercent1 = 15;
let taxPercent1 = 8;

console.log("*****************************");
console.log("Meal Cost:", mealCost1, "| tip percent:", tipPercent1, "| tax percent: ", taxPercent1);
solve(mealCost1, tipPercent1, taxPercent1);