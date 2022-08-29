# Recursive Digit Sum Algorithm Read Me

# Description

We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

# Language

JavaScript.js (Node.js)

# Origin

HackerRank

# Example

```
n = '9875'
k = 1

super digit(9875) = 9 + 8 + 7 + 5 = 29
super digit(29) = 2 + 9 = 11
super digit(11) = 1 + 1 = 2
super digit(2) = 2

returns = 2
```