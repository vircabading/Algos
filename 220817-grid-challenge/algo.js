/////////////////////////////////////////
// 220817 Grid Challenge algo.js
/////////////////////////////////////////

/**
 * The function accepts STRING_ARRAY grid as parameter.
 * The function is expected to return a STRING.
 */

function gridChallenge(grid) {
    console.log({grid});
    // Pseudo Code
    // Create a two dimensional grid
    //      To create this two 2D grid, must sort each string in parameter passed grid
    // Iterate through each column of the grid
    //      To check if they are in alphabetical order
    // If any portion is not in alphabetical order, return 'NO'
    //      Otherwise, return 'YES'
    let twoDGrid = [];

    //      To create this two 2D grid, must sort each string in parameter passed grid
    for (let word of grid) {
        console.log({word});
        twoDGrid.push(word.split(""));
        twoDGrid[twoDGrid.length-1].sort((a,b) => 
        {
            return a.charCodeAt(0) - b.charCodeAt(0);
        });
    }
    console.log({twoDGrid});

    // Otherwise, return 'YES'
    return 'YES';
}

console.log("*********************************");
console.log("Grid Challenge Algorithm");
console.log("*********************************\n");

const grid1 = ['bac', 'eda', 'gef'];

console.log("*** Grid:", grid1, "***");
console.log("Grid Challenge:", gridChallenge(grid1));