///////////////////////////////////////////////////////
// Find ll Numbes Disappeared in Array Algorithm 220526
///////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    // Pseudo Code
    // Create hash map of expected numbers in array
    // Iterate throught the nums array
    //     and note which values are in the expected numbers array
    // Return the value in the expected numbers hash map that were not found

    console.log({nums});

    // Create hash map of expected numbers in array
    let expectedNums = new Map();
    for (let x=1; x<= nums.length; x++) {
        expectedNums.set(x, 1);
    }
    console.log({expectedNums});

    // Iterate throught the nums array
    //     and note which values are in the expected numbers array
    for (let value of nums) {
        console.log({value});
        if (expectedNums.has(value)) {
            console.log("Found", value, " in expeted nums");
            expectedNums.delete(value);
        }
    }
    return expectedNums;
};

console.log("******************************");
console.log("Find all nujmbers disappeared in array Algorithm\n");

console.log("findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]):", findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));