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
                console.log("Append occured, S is now:", S);

                // memorize last operation
                listOfOperations.push([element,appendStr]);
            } 
            // 2. Delete
            else if (element == "2") {
                console.log("Delete");
                // find specified number of chars
                let delChars = "";
                x++;
                while (input[x] != "\n" && x < input.length) {
                    delChars += input[x];
                    x++;
                }
                const delNum = parseInt(delChars);
                console.log({delNum});

                // memorize delete operation
                listOfOperations.push([element, S.slice((S.length-delNum) , S.length)]);

                // delete last k chars of S
                S = S.slice(0, S.length-delNum);
                console.log("Delete occured, S is now:", S);

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
            // 4. Undo
            else if (element == "4") {
                console.log("Undo needs to be done");

                // Recover last operation that can be undone
                if (listOfOperations) {
                    let [lastOperation, operString] = listOfOperations[listOfOperations.length-1];
                    console.log("Last Operation:", lastOperation, "| String:", operString);
                    // If last operation was an appened, delete what was appended
                    let delNum = operString.length;
                    S = S.slice(0, S.length-delNum);
                    console.log("Delete occured, S is now:", S);

                    // If last operation was a delete, appened what was deleted
                }
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