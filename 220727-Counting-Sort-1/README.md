# Counting Sort Algorithm 1 Read Me

# Description

The counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

# Language

JavaScript

# Origin

HackerRank

# Example

```
arr = [1, 1, 3, 2, 1]

The frequency array is [0, 3, 1, 1]. These values can be used to create the sorted array as well: sorted = [1, 1, 1, 2, 3].
```