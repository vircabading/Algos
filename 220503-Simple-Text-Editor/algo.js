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
        if (char == "\n" || char == " ") {
            console.log("got an element", element);

            // Determine which operation to perform
            // 1. Append
            if (element == "1") {
                console.log("Append");
                // find string to append

                // append string

                // memorize last operation
                listOfOperations.push(element);
            } 
            // 2. Delete
            else if (element == "2") {
                console.log("Delete");
                // find specified number of chars

                // delete last k chars of S

                // memorize last operation
                listOfOperations.push(element);
            }
            // 3. Print


            element = "";
        } else {
            element += input[x];
        }
    }

    console.log({listOfOperations});
}


console.log("*****************************");
console.log("Simple Text Editor Algorithm");
console.log("*****************************\n\n");

processData("8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1");