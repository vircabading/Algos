///////////////////////////////////////////
// 220728 Counting Sort Algo.js
///////////////////////////////////////////

/**
* Input Param: INTEGER_ARRAY arr
* Returns: INTEGER_ARRAY.
 */

function countingSort(arr) {
    console.log({arr});
    // Pseudo Code
    // Create an outputArray of 100 elements initialized to 0
    // Iterate throuh arr and for each integer found increase the count
    //    on the corresponding element of outputArray
    // Return outputArray
    
    // Create an outputArray of 100 elements initialized to 0
    const outputArr = [...Array(100)].map((val) => 0);
    
    // Iterate throuh arr and for each integer found increase the count
    //    on the corresponding element of outputArray
    for (let val of arr) {
        outputArr[val]++;
    }
    
    // Return outputArray
    
    return outputArr;
}

console.log("**********************************");
console.log("Counting Sort Algorithm");
console.log("**********************************\n");

const arr1 = [1, 1, 3, 2, 1];
const arr2 = [
    63, 25, 73,  1, 98, 73, 56, 84, 86, 57, 16, 83,
     8, 25, 81, 56,  9, 53, 98, 67, 99, 12, 83, 89,
    80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10,
    94, 32, 44,  3, 89, 30, 27, 79, 46, 96, 27, 32,
    18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
    42, 69, 23, 41, 78, 22,  6, 90, 99, 89, 50, 30,
    20,  1, 43,  3, 70, 95, 33, 46, 44,  9, 69, 48,
    33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75,
    13, 87, 70, 33
  ];

console.log("arr: [1, 1, 3, 2, 1]");
console.log("Counting Sort:", countingSort(arr1));