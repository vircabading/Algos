////////////////////////////////////////////////
//  220505 Balanced Brackets algo.js
///////////////////////////////////////////////

/**
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Pseudo Code
    // 1. Iterate through string S
    // 2. For each opening bracket, add it to a stack
    // 3. For each closing backet, check to see if the corresponding bracket is last on the stack
    // 3.A  If True, remove top bracket on stack and keep iterating through string S
    // 3.B  If False, return 'NO'
    // 4.   If iterated through entire string and stack is empty, return YES
    // 4.A  If iterated through entire string and stack is NOT empty, return NO

    return 'YES';
}

console.log("************************");
console.log("Balanced Brackets algo.js");
console.log("************************\n");

console.log("is balanced '{[()]}':", isBalanced('{[()]}'));