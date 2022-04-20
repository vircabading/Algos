/////////////////////////////////////
//  220420 Grid Challenge algo.js
/////////////////////////////////////

/**
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Pseudo code section
    // 1. Sort the grids horizontally
    // 2. Go through the grids vertically
    // 3. See if they are sorted
    // 4. If any vertical grid is found not sorted, return NO
    // 5. Otherwise, return YES
    console.log({grid});

    // Sort thr grids horizontally
    for (item of grid) {
        console.log({item});
    }
}

console.log("************************");
console.log("Algo.js");
console.log("************************\n");

console.log(gridChallenge([ 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv' ]));