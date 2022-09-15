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
                if (prevGrid[x][y] === "O") {
                    console.log("fond a bomb");
                    outputGrid[x][y] = ".";
                }
            }
        }
        console.log("*** Map Output Grid ***");
        outputGrid.map((item, idx) => {
            console.log(item.join(""));
        });
        console.log("*** Done Mapping ***")
        return outputGrid;
    }

    
    

    // if n is an even number
    //      return a full grid
    if (n%2 === 0) {
        return fullGrid;
    }

    console.log("Explode grid:");
    return explodeGrid(grid);
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