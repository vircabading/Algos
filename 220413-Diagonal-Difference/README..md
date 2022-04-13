# Diagonal Difference Algorithm Read Me

## Description:

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

## Language:

JavaScript

## Example

[[1 2 3],
 [4 5 6],
 [9 8 9]]

The left to right diagonal = 1 + 5 + 9 = 15
The right to left diagonal = 3 + 5 + 9 = 17
The absolute difference is |15 - 17| = 2

## Function description

diagonalDifference functions takes the following parameters:
- int arr[n][m]: a two dimensional array of integers

diagonalDifference function returns:
- int: the absolute diagonal difference