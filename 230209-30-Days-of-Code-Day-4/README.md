# 30 Days of Code: (Day 4) Class vs Instance

# Description

## Objective

In this challenge, we're going to learn about the difference between a class and an instance

## Task

Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter.  The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative.  If a negative argument is passed as initialAge, the constructor should set age to 0 and print 'Age is not valid'.

In addition, you must write the following instance methods:
1. yearPasses() should increase the age instance variable by 1.
2. amIOld() should perform the following conditional actions:

```
- If age < 13, print "You are young"
- If age > 13 and age < 18, print "You are a teenager"
- Otherwise print "You are old"
```

## Output format:

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print 2 or 3 lines (depending on whether or not a valid  was passed to the constructor).

# Language

JavaScript

# Origin

HackerRank

# Examples

```
Input: -1
Output: 'Age is not valid, setting age to 0.'
        'You are young.'
        'You are young.'

Explanation: 
Since initialAge is < 0, then age is set to 0 and print 'Age is not valid, stting age to 0.'  Then since the age is < 13, print 'You are young.'
Three years pass and age is not 3, so now a message is printed 'You are young.'
```

```
Input: 10
Output: 'You are young.'
        'You are a teenager.'
```

```
Input: 16
Output: 'You are a teenager.'
        'You are old.'
```

```
Input: 18
Output: 'You are old.'
        'You are old.'
```