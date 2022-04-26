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
    let numBribes = 0;

    for (let x=q.length-1; x>=0; x--) {
        let expected = x+1;
        if (q[x] == expected) {
            continue;
        } else if (q[x-1] == expected) {
            numBribes++;
            const temp = q[x-1];
            q[x-1] = q[x];
            q[x] = temp;
        } else if (q[x-2] == expected) {
            numBribes += 2;
            let temp = q[x-2];
            q[x-2] = q[x-1];
            q[x-1] = temp;
            temp = q[x-1];
            q[x-1] = q[x];
            q[x] = temp;
        } else {
            console.log("Too chaotic");
            return;
        }    
    }

    console.log(numBribes);
}

minimumBribes([ 2, 1, 5, 3, 4 ] );
minimumBribes([ 2, 5, 1, 3, 4 ] );
minimumBribes([ 1, 2, 3, 5, 4, 6, 7, 8 ] );
minimumBribes([ 4, 1, 2, 3 ] );
minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ] );