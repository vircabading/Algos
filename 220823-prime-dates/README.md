# Prime Date Algorithm Read Me

# Descriptions

In this challenge, the task is to debug the existing code to successfully execute all provided test files.

-----------------

Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,

    Firstly, sequentially concatinate the date, month and year, into a new integer x erasing the leading zeroes.

    Now if x is divisible by either 4 or 7, then we call the date a lucky date.

Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.

Note: You can modify at most five lines in the given code and you cannot add or remove lines to the code.

# Language

JavaScript

# Origin

HackerRank

# Example

```
date = "02-08-2024"

After concatinating the day, month and year, we get x = 2082024. 

As x is divisible by 4 so the date "02-08-2024" is called a lucky date.
```