# Counting Sort Read Me

## Description:

Sorting algorithm that doesn't require comparison.  Instead, an integer array is created whose index range covers the entire range of values in the array to sort.  Each time a value occurs in the original array, you increment the counter at the index.  At the end, the array is ran through, printinmg the value of each non-zero valued index that number of times

## Example

arr = [1, 1, 3, 2, 1]

All of the values are in the range [0 . . . 3], so create an array of zeroes that is 4 in length, result = [0 ,0, 0, 0].

In the end the frequency array is [0, 3, 1, 1].

Next, the frequency array is used to create the sorted array:
sorted = [1, 1, 1, 2, 3]

Note: Always return an array with 100 elements.  The example above shows only the first 4 elements, the remainder being zeros.

## Function Description