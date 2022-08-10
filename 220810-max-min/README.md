# Max Min Algorithm Read Me

# Description

You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as:
max(arr') - min (arr')
where:
- max denotes the largest integer in arr'
- min denotes the smallest integer in arr'

# Language

JavaScript (Node.js)

# Origin

HackerRank

# Example

```
arr = [1, 4, 7, 2]
k = 2

returns: 1
```

```
arr = [1, 2, 3, 4, 10, 20, 30 , 40, 100, 200]
k = 4

returns 3
```