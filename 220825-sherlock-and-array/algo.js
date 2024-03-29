/////////////////////////////////////////////
// 220825 Sherlock and Array
/////////////////////////////////////////////

/**
 * The function accepts INTEGER_ARRAY arr as parameter.
 * The function is expected to return a STRING.
 */

function balancedSums(arr) {
    // Pseudo Code
    // Get the sum of the array
    // Iterate through the array
    //      while iterating array, get sum to left and right of current position
    //          sum to left of current position: start at 0, add as pointer iterates
    //          sum to right of current position: total - (current position's value + sum to left)
    //      if find left sum and right sum are equal, return YES
    // If iterated through array and couldn't find a balanced sum, return NO
    
    // Get the total sum of the array
    let totalSum=0;
    for (let num of arr) {
        totalSum += num;
    }

    // Iterate through the array
    //      while iterating array, get sum to left and right of current position
    //          sum to left of current position: start at 0, add as pointer iterates
    //          sum to right of current position: total - (current position's value + sum to left)
    //      if find left sum and right sum are equal, return YES
    let leftSum = 0;
    let currentLoc = 0;     // Local pointer which will iterate array
    while (currentLoc < arr.length) {
        const num = arr[currentLoc];
        const rightSum = totalSum - (num+leftSum);


        if (leftSum === rightSum) {
            return "YES";
        }
        
        leftSum += num;
        currentLoc++;
    }

    // If iterated through array and couldn't find a balanced sum, return NO
    return "NO";
}

console.log("***********************************");
console.log("Sherlock and Array Algorithm");
console.log("***********************************\n");

const array1 = [ 1, 2, 3, 3 ];
const array2 = [ 1, 2, 3 ];
const array3 = [5, 6, 8, 11];
const array4 = [1];

console.log("Array:", array1, "Expected: Yes");
console.log("Balanced sums found:", balancedSums(array1), "\n");

console.log("Array:", array2, "Expected: No");
console.log("Balanced sums found:", balancedSums(array2), "\n");

console.log("Array:", array3, "Expected: Yes");
console.log("Balanced sums found:", balancedSums(array3), "\n");


console.log("Array:", array4, "Expected: Yes");
console.log("Balanced sums found:", balancedSums(array4), "\n");