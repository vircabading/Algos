# Jesse and Cookies Algorithm Read Me

# Description

Jesse loves cookies and wants the sweetness of some cookies to be greater than value . To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
```
sweetness = (1 x least sweet cookie) + (2 x 2nd least sweet cookie)
```
Given the sweetness of a number of cookies, determine the minimum number of operations required. If it is not possible, return -1

# Language

JavaScript

# Origin

HackerRank

# Example

k= 9
A= [2, 7, 3, 6, 4, 6]

The smallest values are 2, 3
Remove them then return 2+(2x3)=8 to the array.

Now A = [7, 6, 4, 6]