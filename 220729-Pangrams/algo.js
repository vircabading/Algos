/////////////////////////////////////////
// 220729 Pangram Algorithm algo.js
/////////////////////////////////////////

/**
 * The function accepts STRING s as parameter.
 * The function is expected to return a STRING.
 */

function pangrams(s) {
    console.log({s});
    // Pseudo Code
    // Create a map of all 26 letres initialized to value of zero
    // Iterate through string s and each time a letter is encountered, add it to map
    //     if when mapping a letter it's value is initially zero
    //          then add one to the letters found count
    // If the letters found count = 26, return "pangram"
    //     otherwise return "not pangram"
    
    // Create a map of all 26 letres initialized to value of zero
    const letterMap = {
        "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
    }
    let lettersFound = 0;

    // Iterate through string s and each time a letter is encountered, add it to map
    for (let letter of s) {
        letter = letter.toLowerCase();
        console.log({letter});
        // Check if letter is an alphabetic char
        if (letter.match(/[a-z]/i)) {
            console.log(letter, "is an alphabetic character");
            //     if when mapping a letter it's value is initially zero
            //          then add one to the letters found count
            if (letterMap[letter] === 0) {
                lettersFound++;
            }
            letterMap[letter]++;
        }
    }

    // If the letters found count = 26, return "pangram"
    //     otherwise return "not pangram"
    console.log({letterMap});
    console.log({lettersFound});
    if (lettersFound >= 26) {
        return "pangram";
    }
    return "not pangram";
}

console.log("***************************************");
console.log("Pangrams Algorithm");
console.log("***************************************\n");

const s1 = "The quick brown fox jumps over the lazy dog";
const s2 = "We promptly judged antique ivory buckles for the next prize."

console.log("s =", s1);
console.log("", pangrams(s1), "\n");

console.log("s =", s2);
console.log("", pangrams(s2), "\n");