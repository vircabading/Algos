/////////////////////////////////////////
// 220805 Drawing Book Algo.js
/////////////////////////////////////////

/**
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 * The function is expected to return an INTEGER.
 */

function pageCount(n, p) {
    // Pseudo Code
    // Determine how many pages there are in the book
    // Determine what page p is on
    // Page determination:
    //      if page number is odd:
    //          page turn number = (x-1)/2
    //      if page number is even:
    //          page turn number = x/2
    // Find out how far away p is from the front page
    // Find out how far away p is from the back page
    // Return the smaller page distance
    
    const getPageTurn = (x) => {
        if ( x%2 > 0 ) {    // If is odd number
            return (x-1)/2;
        }
        return x/2;         // Else is even number
    }
    
    // Determine how many pages there are in the book
    const nPageTurn = getPageTurn(n);
    
    // Determine what page p is on
    const pPageTurn = getPageTurn(p);

    
    console.log({nPageTurn});
    console.log({pPageTurn});
}

console.log("*********************************");
console.log("Drawing Book Algorithm");
console.log("*********************************\n");

const n1 = 5;
const p1 =3;

console.log("N:", n1, "| P:", p1);
console.log("Minimum page turns:", pageCount(n1, p1), "\n");