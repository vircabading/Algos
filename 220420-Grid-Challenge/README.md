# Grid Challenge Algorithm

## Description

Given a square grid of chatracters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.  Determine if the columns are also in ascending alphabetical order, top to bottom.  Return Yes if they are or No if they are not

## Language

JavaScript

## Origin

HackerRank

## Example

grid = ['abc', 'ade', 'efg']

```
a b c
a d e
e f g
```

The rows are already in alphabetical order.  The columns a a e, b d f, and c e g are also in alphabetical order, so the answer would be YES.  Only elements withib the same row can be rearranged.  They cannoyt be movedf to a difference row.

## Input Params

string grid[n]: an array of strings

## Returns

string: either "YES" or "NO"