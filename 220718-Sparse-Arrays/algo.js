///////////////////////////////////////////////////
// 220718 Sparse Arrays Algo.js
///////////////////////////////////////////////////

/**
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Pseudo Code
    // Go through each query to see if it matches any of the strings
    // If the query matches a string, add one to count
    // return the array of counts

    // Variable Declaration Section
    let counts = [];

    console.log({strings});
    console.log({queries});
}

console.log("*******************************");
console.log('Sparse Arrays Algorithm');
console.log('*******************************\n');

console.log("Strings: ['ab', 'ab', 'abc']");
console.log("Queries: ['aba', 'xzxb', 'ab']");
console.log("Matching Strings:", matchingStrings(['ab', 'ab', 'abc'], ['aba', 'xzxb', 'ab']), '\n');