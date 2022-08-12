# Dynanmic Array Algorithnm Read Me

# Description

- Deckare a 2-dimensional array (arr) of n empty arrays.  All arrays are zero indexed.

- Declare an integer (lastAnswer) and initialze it to 0

- There are two types of queries, given as an array of strings for you to parse:
    1. Query: 1 x y
        1. Let idx = (( x XOR lastAnswer ) % n)
        2. Append the integer y to arr[idx]
    2. Query: 2 x y
        1. Let idx = (( x XOR lastAnswer) % n)
        2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer
        3. Store the new value of lastAnswer to an answers array

Note: size(arr[idx]) is the number of elements in arr[idx]

# Language

JavaScript.js (Node.js)

# Origin

HackerRank

# Examples

```
n = 2
queries:
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1

returns [7, 3]
```