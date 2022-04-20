////////////////////////////////////////////
//  220420 Contains Duplicate algo.js
////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // Pseudo Code
    // 1. Create a hashmap
    // 2. Go through the nums array and see if each element is in the hash map
    // 3. If the element is not in the hash map, add the element to the hash map
    // 4. If the element is already in the map, it means duplicate is found
    // 5. If duplicate is found return true
    // 6. If no duplicate found in the array, return false

    // Create a hashmap
    const dupMap = new Map();

    // Go throught the nums array
    for (num of nums) {
        // See if each num is in the hash map
        if (dupMap.has(num)) {      // Duplicate found --> return true
            console.log("*** Duplicate found:", num);
            return true;
        } else {                    // Not Duplicate --> add num to hash map
            dupMap.set(num, 1);
        }

        console.log({num});
        console.log({dupMap});
    }
    
    // If no duplicate found in the array, return false
    return false;
};

console.log("////////////////////////////");
console.log("Contains Duplicate Algorithm");
console.log("////////////////////////////\n");

console.log("containsDuplicate([1,2,3,1]):", containsDuplicate([1,2,3,1]));
console.log("containsDuplicate([1,2,3,4]):", containsDuplicate([1,2,3,4]));
