# Tower Breakers Algorithm Read Me

# description

Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:

Initially there are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1 < y < x and y evenly divides x.
If the current player is unable to make a move, they lose the game.
Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

# language

JavaScript (Node.js)

# origin

HackerRank

# example

```
n = 2
m = 6

return 2

reasoning:
There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
- remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0
- remove 5 pieces to leave 1 (6 modulo 1 = 0)

Let Player 1 remove 3. Now the towers are 3 and 6 units tall.

Player 2 matches the move. Now the towers are both 3 units tall.

Now Player 1 has only one move.

Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
Player 2 matches again. Towers are both 1 unit tall.

Player  has no move and loses. Return 2.
```

```
n = 2;
m = 2;

return 2;

reasoning:
Playes 1 chooses one of the two towers and reduces it to 1.
Then Player 2 reduces the remaining tower to height 1.
As both towers are now at height 1, player 1 cannot make a move so player 2 is the winner
```