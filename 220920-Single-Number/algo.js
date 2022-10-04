//////////////////////////////////////////
// 220920 Single Number algo.js
//////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = (nums) => {
    // console.log({nums});
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

    // For each number in nums
    //      if the number is not in the hash map
    //          intialize the numbers as a key with a value (count) as 1
    //      if the number is in the hash map
    //          increase the value (count) of that number's key by 1
    for (num of nums) {
        // console.log({num});
        if (!numsMap.has(num)) {
            // console.log("Found a new num:", num);
            numsMap.set(num, 1);
        } else {
            const newCount = numsMap.get(num) + 1;
            numsMap.set(num, newCount);
        }
    }

    // console.log({numsMap});

    // Return the key from the hash map with a value of 1
    let output = 0;
    numsMap.forEach((count, key) => {
        // console.log("Key:", key, "| Count:", count);
        if (count === 1) {
            // console.log("*** found single number", key);
            output = key;
        }
    })

    return output;
};

console.log("*****************************");
console.log("Single Number Algorithm");
console.log("*****************************\n");

const nums1 = [2, 2, 1];
const expected1 = 1;

const nums2 = [4, 1, 2, 1, 2];
const expected2 = 4;

const nums3 = [1];
const expected3 = 1;

console.log("Nums:", nums1, "| expected output:", expected1);
console.log("Single number:", singleNumber(nums1), "\n");

console.log("Nums:", nums2, "| expected output:", expected2);
console.log("Single number:", singleNumber(nums2), "\n");

console.log("Nums:", nums3, "| expected output:", expected3);
console.log("Single number:", singleNumber(nums3), "\n");