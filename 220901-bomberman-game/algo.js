/////////////////////////////////////////////
// 220901 Bombrerman Game algo.js
/////////////////////////////////////////////

/**
 * prints the grid in two dimensional format
 * @param {array of Strings} grid 
 */
const printGrid = (grid) => {
    for (let row of grid) {
        console.log(row);
    }
}

/**
* The function accepts following parameters:
*  1. INTEGER n
*  2. STRING_ARRAY grid
 * The function is expected to return a STRING_ARRAY.
 */

function bomberMan(n, grid) {
    // Pseudo code
    // If n is less than 2
    //      just return the grid
    // Create a full grid
    // if n is an even number
    //      return a full grid
    // otherwise, iterate as long as iterator is <= n
    //      iterator starts at 3
    //      prevGrid is memorized from the grid
    //      make the grid into a full grid
    //      using the prevGrid is a map, explode the current Grid
    //      increase iterator by 2
    // in the end, return the grid

    // If n is less than 2
    //      just return the grid
    if (n<2) {
        return grid;
    }

    const numRows = grid.length;
    const numCols = grid[0].length;

    // Create a full grid
    let fullGrid = [];
    for (let x=0; x<numRows; x++) {
        let gridRow = "";
        for (let y=0; y<numCols; y++) {
            gridRow += "O";
        }
        fullGrid.push(gridRow);
    }

    const isInGrid =(x, y) => {
        if (x<0) {
            return false;
        } else if (y<0) {
            return false;
        } else if (x>=numRows) {
            return false;
        } else if (y>=numCols) {
            return false;
        }
        return true;
    }

    const explodeGrid = (prevGrid) => {
        let outputGrid = [];
        for (let x=0; x<numRows; x++) {
            let gridRow = [];
            for (let y=0; y<numCols; y++) {
                gridRow.push("O");
            }
            outputGrid.push(gridRow);
        }
        
        for (let x=0; x<numRows; x++) {
            for (let y=0; y<numCols; y++) {
                if (prevGrid[x][y] === "O") {       // Bomb Found
                    outputGrid[x][y] = ".";         // Explode bomb on it's spot
                    if (isInGrid(x-1,y)) {          // Explode above bomb
                        outputGrid[x-1][y] = ".";
                    }
                    if (isInGrid(x+1,y)) {          // Explode below bomb
                        outputGrid[x+1][y] = ".";
                    }
                    if (isInGrid(x,y-1)) {          // Explode to the left of bomb
                        outputGrid[x][y-1] = ".";
                    }
                    if (isInGrid(x,y+1)) {          // Exploce to the right of bomb
                        outputGrid[x][y+1] = ".";
                    }
                }
            }
        }
        return outputGrid.map((item, idx) => item.join(""));
    }

    // if n is an even number
    //      return a full grid
    if (n%2 === 0) {
        return fullGrid;
    }

    return bomberMan(n-2, explodeGrid(grid));
}

console.log("**********************************")
console.log("Bomberman Game Algorithm");
console.log("**********************************\n")

const n1 = 3;
const grid1 = ['.......', '...O...', '....O..','.......', 'OO.....', 'OO.....'];
const expected1 = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO'];

console.log("**** N:", n1, "grid: ****");
printGrid(grid1);
console.log("\nExpected grid:");
printGrid(expected1);
console.log("\nBomberman output:");
printGrid(bomberMan(n1, grid1));
console.log("\n");

const n2 = 5;
const grid2 = [ '.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...' ];
const expected2 = ['.......', '...O.O.', '...OO..', '..OOOO.', 'OOOOOOO', 'OOOOOOO'];

console.log("**** N:", n2, "grid: ****");
printGrid(grid2);
console.log("\nExpected grid:");
printGrid(expected2);
console.log("\nBomberman output:");
printGrid(bomberMan(n2, grid2));
console.log("\n");