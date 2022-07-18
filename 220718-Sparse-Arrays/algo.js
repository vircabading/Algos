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

    //console.log({strings});
    //console.log({queries});

    // Go through the queries
    for (let x=0; x<queries.length; x++) {
        //console.log("Query:", queries[x]);
        // Create a difault count for this query
        counts.push(0);
        // Iterate through the strings
        for (const string of strings) {
            //console.log({string});
            // Check to see if query and string length is the same
            if (string.length === queries[x].length) {
                //console.log("found equal length query");
                // Check to see if query and string are the same
                if (string == queries[x]) {
                    //console.log("found equal");
                    counts[x] = counts[x] + 1;
                }
            }
        }
    }

    return counts;
}

console.log("*******************************");
console.log('Sparse Arrays Algorithm');
console.log('*******************************\n');

console.log("Strings: ['ab', 'ab', 'abc']");
console.log("Queries: ['ab', 'abc', 'bc']");
console.log("Matching Strings:", matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']), '\n');

console.log("Strings: ['aba', 'baba', 'aba', 'xzxb']");
console.log("Queries: ['aba', 'xzxb', 'ab']");
console.log("Matching Strings:", matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']), '\n');