///////////////////////////////////////////////
//  Insertion Sort Algo.js
///////////////////////////////////////////////


/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/


function insertionSort(arr) {
    // Pseudo Code
    // All items to the left of current are assumed to be sorted
    // If the current is less less than item to left of it, swap
    //   Keep swapping the current with the value to the left until the value to the left is less than current
    for (let current=0; current<arr.length; current++) {
        let backRunner = current;
        while (backRunner > 0) {
            if (arr[backRunner] < arr[backRunner-1]) {
                let temp = arr[backRunner];
                arr[backRunner] = arr[backRunner-1];
                arr[backRunner-1] = temp;
                backRunner -= 1;
            } else {
                backRunner = 0;
            }
        }
    }
    return arr;
}

console.log("Insertion Sort: [565,909,349,126,477,201,240,699] ::", insertionSort([565,909,349,126,477,201,240,699]));