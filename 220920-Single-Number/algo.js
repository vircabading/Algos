//////////////////////////////////////////
// 220920 Single Number algo.js
//////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = (nums) => {
    console.log({nums});
    // Pseudo Code
    // Create a nums hash map
    // For each number in nums
    //      if the number is not in the hash map
    //          intialize the numbers as a key with a value (count) as 1
    //      if the number is in the hash map
    //          increase the value (count) of that number's key by 1
    // Return the key from the hash map with a value of 1
    
    // Create a nums hash map
    const numsMap = new Map();



    console.log({numsMap});
};

console.log("*****************************");
console.log("Single Number Algorithm");
console.log("*****************************\n");

const nums1 = [2, 2, 1];
const expected1 = 1;

console.log("Nums:", nums1, "| expected output:", expected1);
console.log("Single number:", singleNumber(nums1), "\n");