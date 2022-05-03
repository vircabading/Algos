/////////////////////////////////////////////
//  220503 Simple Text Editor algo.js
/////////////////////////////////////////////

function processData(input) {
    //Enter your code here
    console.log({input});
    
    let operations = [];
    let element = "";
    let S = "";
    let listOfOperations = [];

    // Iterate through the input
    for (let x=0; x<input.length; x++) {
        let char = input[x];
        console.log({char});

        // If the current char is '\n' or ' ' then found an operation
        if (char == "\n" || char == " ") {
            console.log("got an element", element);

            // Determine which operation to perform
            // 1. Append
            if (element == "1") {
                console.log("Append");
                // find string to append
                let appendStr = "";
                x++;
                while (input[x] != "\n" && x < input.length) {
                    appendStr += input[x];
                    x++;
                }

                // append string
                S += appendStr;

                // memorize last operation
                listOfOperations.push([element,appendStr]);
            } 
            // 2. Delete
            else if (element == "2") {
                console.log("Delete");
                // find specified number of chars
                let undoChars = "";
                x++;
                while (input[x] != "\n" && x < input.length) {
                    undoChars += input[x];
                    x++;
                }
                const undoNum = parseInt(undoChars);
                console.log({undoNum});

                // delete last k chars of S

                // memorize last operation
                listOfOperations.push(element);
            }
            // 3. Print
            else if (element == "3") {
                console.log("Print");

                // find char to print
                let charLoc = "";
                x++;
                while (input[x] != "\n" && x < input.length) {
                    charLoc += input[x];
                    x++;
                }
                const LocNum = parseInt(charLoc);
                console.log({charLoc});

                // print char
                console.log(S[charLoc-1]);
            }
            // 4. Delete
            else if (element == "4") {
                console.log("Undo");
            }


            element = "";
        } else {
            element += input[x];
        }
    }

    console.log({S});
    console.log({listOfOperations});
}


console.log("*****************************");
console.log("Simple Text Editor Algorithm");
console.log("*****************************\n\n");

processData("8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1");