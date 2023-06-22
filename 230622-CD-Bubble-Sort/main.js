// bubbleSort()
/* 

*/

const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    let sortedNums = nums;

    // 1. Decrement max from end of array until max is equal to zero
    // 2. start at front and move until end of array swapping left and righ elements until last element is highest element

    let endIndex = sortedNums.length - 1;
    while (endIndex > 0) {
        for (leftIdx = 0; leftIdx < endIndex; leftIdx++) {
            const rightIdx = leftIdx + 1;
            if ( sortedNums[leftIdx] > sortedNums[rightIdx] ) {
                // swap left and right
                const tempNum = sortedNums[rightIdx];
                sortedNums[rightIdx] = sortedNums[leftIdx];
                sortedNums[leftIdx] = tempNum;
            }
        }
        endIndex--;
    }

    return sortedNums;
}

console.log("******************************************");
console.log("Sort Num 1");
console.log(bubbleSort(nums1));

console.log("\n******************************************");
console.log("Sort Num 2");
console.log(bubbleSort(nums2));

console.log("\n******************************************");
console.log("Sort Num 3");
console.log(bubbleSort(nums3));