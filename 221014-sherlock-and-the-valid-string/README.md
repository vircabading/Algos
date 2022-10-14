# Sherlock and the Valid String Algorithm Read Me

# Description

Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

# Language

JavaScript

# Origin

HackerRank

# Examples

```
s = 'abc'
returns: 'YES'

This is a valid string because the frequencies of all three strings are 1
```

```
s = 'abcc'
returns: 'YES'

This is a valid string because we can remove one c from the string and have 1 of each character in the remaining string
```