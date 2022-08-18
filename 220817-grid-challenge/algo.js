/////////////////////////////////////////
// 220817 Grid Challenge algo.js
/////////////////////////////////////////

/**
 * The function accepts STRING_ARRAY grid as parameter.
 * The function is expected to return a STRING.
 */

function gridChallenge(grid) {
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
        twoDGrid.push(word.split(""));
        twoDGrid[twoDGrid.length-1].sort((a,b) => 
        {
            return a.charCodeAt(0) - b.charCodeAt(0);
        });
    }

    // Iterate through each column of the grid
    //      To check if they are in alphabetical order
    // If any portion is not in alphabetical order, return 'NO'
    for (let col = 0; col < twoDGrid[0].length; col++) {
        let frontPtr = 0;
        let backPtr = 1;
        while (backPtr < twoDGrid.length) {
            const frontLetter =  twoDGrid[frontPtr][col];
            const backLetter =  twoDGrid[backPtr][col];
            if (frontLetter.charCodeAt(0) > backLetter.charCodeAt(0)) {
                return 'NO';
            }
            frontPtr++;
            backPtr++;
        }
    }

    // Otherwise, return 'YES'
    return 'YES';
}

console.log("*********************************");
console.log("Grid Challenge Algorithm");
console.log("*********************************\n");

const grid1 = ['bac', 'eda', 'gef'];
const grid2 = ['bac', 'gef', 'eda'];
const grid3 = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
const grid4 = [ 'abc', 'lmp', 'qrt' ];
const grid5 = [ 'mpxz', 'abcd', 'wlmf' ];
const grid6 = [ 'abc', 'hjk', 'mpq', 'rtv' ];

console.log("*** Grid:", grid1, "***");
console.log("Grid Challenge:", gridChallenge(grid1), "\n");

console.log("*** Grid:", grid2, "***");
console.log("Grid Challenge:", gridChallenge(grid2), "\n");

console.log("*** Grid:", grid3, "***");
console.log("Grid Challenge:", gridChallenge(grid3), "\n");

console.log("*** Grid:", grid4, "***");
console.log("Grid Challenge:", gridChallenge(grid4), "\n");

console.log("*** Grid:", grid5, "***");
console.log("Grid Challenge:", gridChallenge(grid5), "\n");

console.log("*** Grid:", grid6, "***");
console.log("Grid Challenge:", gridChallenge(grid6), "\n");