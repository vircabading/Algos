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

    // Create a Character Grid
    let charGrid=[];

    // Sort thr grids horizontally
    for (item of grid) {
        charGrid.push(item.split('').sort());
    }
    console.log({charGrid});

    // Go through the character grid vertically to see if they are sorted
    for (let x=0; x<charGrid[0].length; x++) {      // x = horizontal position
        let prevLetter = 'a';
        for (let y=0; y<charGrid.length; y++) {     // y = vertical position
            if (prevLetter > charGrid[x,y]) {
                return "NO"
            }
            prevLetter = charGrid[x,y];
        }
    }
    return "YES"
}

console.log("************************");
console.log("Algo.js");
console.log("************************\n");

console.log("gridChallenge([ 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv' ]):", gridChallenge([ 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv' ]));

console.log("gridChallenge([ 'eabcd', 'olkmn', 'fghij', 'trpqs', 'xywuv' ]):", gridChallenge([ 'eabcd', 'olkmn', 'fghij', 'trpqs', 'xywuv' ]));