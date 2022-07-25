# Diagonal Difference Algorithm Read Me

# Description

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

# Language

JavaScript

# Origin

HackerRank

# Examples

```
arr:
1 2 3
4 5 6
7 8 9

The left to right diagonal = 1 + 5 + 9 = 15
The right to left diagonal = 3 + 5 + 9 = 17
Their absolute difference is |15 - 17| = 2
```

```
arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

11  2  4
4   5  6
10  8 -12

left to right diagonal = 11 + 5 + -12 = 4
right to left diagonal = 4 + 5 + 10 = 19
absolute difference = |4-19| = 15
output: 15
```