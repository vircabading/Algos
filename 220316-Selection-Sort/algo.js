////////////////////////////////////////////////
//  220316 Selection Sort Algo.js
////////////////////////////////////////////////

/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/

// minidx = 4
//             i          
//                     m
//                         j
const myArr = [3,2,9,5,1,4,8]


function selectionSort(arr){
    // Pseudo code
    // Iterate through the array and find the minimum value
    // Move the minimum value to the beginning of the list
    // Next, iterate through list again to find next minimum value and move it to next index at front
    // Repeat until all values are sorted
    // Field Variables
    
    for (let outIdx = 0; outIdx < arr.length; outIdx++) {
        let minValIdx = outIdx;
        // Iterate through the array and find the minimum value
        for (let inIdx = outIdx; inIdx < arr.length; inIdx++) {
            if ( arr[inIdx] < arr[minValIdx] ) {
                minValIdx = inIdx;
            }
        }
        // Move the minimum value to the beginning of the list
        let temp = arr[outIdx]
        arr[outIdx] = arr[minValIdx];
        arr[minValIdx] = temp;
        console.log({ arr });
    }
}

selectionSort(myArr);