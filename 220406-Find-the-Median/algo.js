/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    let sortedArr = arr.sort();
    return sortedArr[Math.floor(sortedArr.length/2)];
}

console.log("findMedian([0,1,2,4,6,5,3]):",findMedian([0,1,2,4,6,5,3]));
