/////////////////////////////////////////////
//  220503 Simple Text Editor algo.js
/////////////////////////////////////////////

function processData(input) {
    //Enter your code here
    console.log({input});
    
    let operations = [];
    let element = "";
    for (char of input) {
        console.log({char});
        if (char == "\n" || char == " ") {
            console.log("got an element");
        }
    }
} 

console.log("*****************************");
console.log("Simple Text Editor Algorithm");
console.log("*****************************\n\n");

processData("8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1");