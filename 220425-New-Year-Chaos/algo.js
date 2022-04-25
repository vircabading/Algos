/////////////////////////////////////////////
//  220425 New Year Chaos Algorithm algo.js
/////////////////////////////////////////////

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Pseudo Code
    // 1, Keep track of running totl # of bribes
    // 2. Go through array q and get each element from the array
    // 3. If the element from q is farther forward than expected,
    //      determine how far ahead it is from it's expected position
    //      and add that number to the running total # of bribes
    // 4. If any element from q is more than 2 positions ahead of its
    //      expected position, print "Too chaotic"
    // 5. After having finished iterating through all elements in array q
    //      print the total # of bribes
    console.log({q});
}

minimumBribes([ 2, 1, 5, 3, 4 ] );
minimumBribes([ 2, 5, 1, 3, 4 ] );