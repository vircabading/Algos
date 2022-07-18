# Sparse Arrays Algorithm Read Me

# Description

There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

# Language

JavaScript (Node.js)

# Origin

HackerRank

# Example

```
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

returns [2, 1, 0]
```

```
strings = ['aba', 'baba', 'aba', 'xzxb']
queries = ['aba', 'xzxb', 'ab']

returns [2, 1, 0]
```

```
strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf']
queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']

returns [1, 3, 4, 3, 2]
```