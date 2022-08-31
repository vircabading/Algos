# Counter Game Algorithm Read Me

# Description

Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.

Given an initial value, determine who wins the game.

# Language

JavaScript.js (Node.js)

# Origin

HackerRank

# Examples

```
n = 132

It's Louise's turn first. She determines that 132 is not a power of 2. The next lower power of 2 is 128, so she subtracts that from 132 and passes 4 to Richard. 4 is a power of 1, so Richard divides it by 1 and passes 1 to Louise. Likewise, 2 is a power so she divides it by 2 and reaches 1. She wins the game.

returns: Louise
```

```
n = 6

returns: Richard
```