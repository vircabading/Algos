///////////////////////////////////////////
//  220414 Counting Sort Algo.js
///////////////////////////////////////////

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Pseudo-code
    // Create a frequenzy array which will be returned
    // Iterate through the original array and tally the elements into the frequency array
    // Return the frequency array

    // Create frequrency array
    let freqArray = [];
    // Initialize the freqArray to 100 zeroes
    for (let x=0; x<100; x++) {
        freqArray[x] = 0;
    }

    // Iterate through the original array
    for (let x=0; x<arr.length; x++) {
        console.log(arr[x]);
    }

    // Return the frequency Array
    return freqArray;
}

console.log("Counting Sort [1,1,3,2,1]:", countingSort([1,1,3,2,1]));