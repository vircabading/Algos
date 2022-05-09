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

    let isCorrespondingBracket = (open, close) => {
        if (close == ")") {
            if (open == "(") {
                return true;
            }
            return false;
        } else if (close == ']') {
            if (open == "[") {
                return true;
            }
            return false;
        } else if (close == '}') {
            if (open == "{") {
                return true;
            }
            return false;
        }
        return false;
    }
    let openBracketStack = [];

    // 1. Iterate through string S
    for (let char of s) {
        // console.log({char});
        // 2. For each opening bracket, add it to a stack
        if ( (char == "(") || (char == "{") || (char == "[") ) {
            openBracketStack.push(char);
            // console.log("Open bracket found, bracket stack:", openBracketStack);
        } 
        // 3. For each closing backet, check to see if the corresponding bracket is last on the stack
        else {
            let topOfStack = openBracketStack[ openBracketStack.length-1 ];
            if (isCorrespondingBracket(topOfStack, char)) {
                openBracketStack.pop();
            } else {
                return 'NO';
            }
            // console.log("Close bracket found | top of stack:", topOfStack, "| bracket stack:", openBracketStack);
        }
    }

    // 4.   If iterated through entire string and stack is empty, return YES
    // 4.A  If iterated through entire string and stack is NOT empty, return NO
    if (openBracketStack.length === 0) {
        return 'YES';
    }
    return 'NO';
}

console.log("************************");
console.log("Balanced Brackets algo.js");
console.log("************************\n");

console.log("is balanced '{[()]}':", isBalanced('{[()]}'));
console.log("is balanced '{[()]':", isBalanced('{[()]'));
console.log("is balanced '{()]':", isBalanced('{()]'));