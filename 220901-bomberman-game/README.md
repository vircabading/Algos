# Bomberman Algorithm Read Me

# Description

Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.

Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds. Once a bomb detonates, it's destroyed — along with anything in its four neighboring cells. This means that if a bomb detonates in cell i,j any valid cells (i+or-1,j) and (i,j+or-1) are cleared. If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's no chain reaction.

Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:

1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
2. After one second, Bomberman does nothing.
3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate at this point.
4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
5. Bomberman then repeats steps 3 and 4 indefinitely.

Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and any bombs planted at the same time will detonate at the same time.

Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the grid after N seconds.

For example, if the initial grid looks like:

```
...
.O.
...
```
it looks the same after the first second.

After the second second, Bomberman has placed all his charges in empty cells:
```
OOO
OOO
OOO
```
At the third second, the bomb in the middle blows up, emtying all surrrounding cells:
```
0.0
...
0.0
```

# Language

JavaScript.js (Node.js)

# Origin

HackerRank

# Examples

```
n = 3
grid = ['.......', '...O...', '....O..''.......', 'OO.....', 'OO.....']

which is:
.......
...O...
....O..
.......
OO.....
OO.....

output gird = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO']

OOO.OOO
OO...OO
OOO...O
..OO.OO
...OOOO
...OOOO
```

```
n = 5
grid = [ '.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...' ]
.......
...O.O.
....O..
..O....
OO...OO
OO.O...
1
.......
...O.O.
....O..
..O....
OO...OO
OO.O...
2
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
3
OOO.O.O
OO.....
OO....O
.......
.......
.......
4
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
5
.......
...O.O.
...OO..
..OOOO.
OOOOOOO
OOOOOOO

grid output =
.......
...O.O.
...OO..
..OOOO.
OOOOOOO
OOOOOOO
```