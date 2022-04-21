//////////////////////////////////////////////
//  220421 Missing Number
//////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // Pseudo Code
    // 1. Create a hash map of expected numbers in the array [0,n]
    //      where n is the length of nums array
    // 2. Go through the nums array and remove each item found from the expected hash map
    // 3. In the end, the remaining number in the expected numbers map is the missing number

    const n = nums.length;

    // Create expected numbers hash map
    const expectNums = new Map();
    for (let x=0; x<=n; x++) {
        expectNums[x] = x;
    }

    // Go through the nums array and remove each item found from expected nums hash map
    for (let num of nums) {
        expectNums[num] = -1;
    }

    for (num in expectNums) {
        if (expectNums[num] >= 0) {
            return expectNums[num]
        }
    }
};

console.log("******************************");
console.log("Missing Number Algorithm")
console.log("******************************\n");

console.log("expectNums([3,0,1]):", missingNumber([3,0,1]));
console.log("expectNums([0,1]):", missingNumber([0,1]));
console.log("expectNums([3,0,1]):", missingNumber([3,0,1]));