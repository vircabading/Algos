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

    // Calculate tip amount
    let tipAmount = meal_cost * tip_percent;
    // console.log({tipAmount});

    // Calculate tax amount
    let taxAmount = meal_cost * tax_percent;
    // console.log({taxAmount});

    // Calculate Total Cost of Meal
    let totalCost = meal_cost + tipAmount + taxAmount;
    // console.log({totalCost});

    // Output the total cost rounded to the nearest integer
    console.log(Math.round(totalCost));

    return;
}

console.log("*****************************");
console.log("30 days of code: Day 2 Operations\n");

let mealCost1 = 100;
let tipPercent1 = 15;
let taxPercent1 = 8;

console.log("*****************************");
console.log("Meal Cost:", mealCost1, "| tip percent:", tipPercent1, "| tax percent: ", taxPercent1);
solve(mealCost1, tipPercent1, taxPercent1);

let mealCost2 = 12.00;
let tipPercent2 = 20;
let taxPercent2 = 8;

console.log("\n*****************************");
console.log("Meal Cost:", mealCost2, "| tip percent:", tipPercent2, "| tax percent: ", taxPercent2);
solve(mealCost2, tipPercent2, taxPercent2);

let mealCost3 = 15.5;
let tipPercent3 = 15;
let taxPercent3 = 10;

console.log("\n*****************************");
console.log("Meal Cost:", mealCost3, "| tip percent:", tipPercent3, "| tax percent: ", taxPercent3);
solve(mealCost3, tipPercent3, taxPercent3);