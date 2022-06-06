///////////////////////////////////////////////////////
// Find ll Numbes Disappeared in Array Algorithm 220526
///////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    // Pseudo Code
    // 1. Find the expected array range
    // 2. Recreate the expected array as a hash
    // 3. Iterate throuigh the nums array and remove each item from the hash
    // 4. Return any items left in the hash as an array of missing numbers

    console.log({nums});

    // Find the Expected array range
    let largestNum = 1;
    for (let x of nums) {   // Retrieve each value in the array
        console.log({x});
    }
};

console.log("******************************");
console.log("Find all nujmbers disappeared in array Algorithm\n");

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));