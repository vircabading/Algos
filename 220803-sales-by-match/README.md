# Sales by Match Algorithm Read Me

# Description

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# Language

JavaScript (Node.js)

# Origin

HackerRank

# Example

```
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one pair of color 2.  There are three off sock left, one of each color.  The number of pairs is 2.

returns: 2
```

```
n: 9
ar: [
    10, 20, 20, 10, 10,
    30, 50, 10, 20
  ]

returns: 3
```

```
n: 10
ar: [
    1, 1, 3, 1, 2,
    1, 3, 3, 3, 3
  ]

returns: 4
```

# Input Parameters

integer n: the number of socks represented in ar
array of integers ar: each integer represents a color of a sock

# Returns

integer: number of pairs of color matching socks