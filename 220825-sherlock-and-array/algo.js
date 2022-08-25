/////////////////////////////////////////////
// 220825 Sherlock and Array
/////////////////////////////////////////////

/**
 * The function accepts INTEGER_ARRAY arr as parameter.
 * The function is expected to return a STRING.
 */

function balancedSums(arr) {
    console.log({arr});
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
    console.log({totalSum});
    
    // If iterated through array and couldn't find a balanced sum, return NO
    return "NO";
}

console.log("***********************************");
console.log("Sherlock and Array Algorithm");
console.log("***********************************\n");

const array1 = [ 1, 2, 3, 3 ];
console.log("Array:", array1);
console.log("Balanced sums found:", balancedSums(array1));