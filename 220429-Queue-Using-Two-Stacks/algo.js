////////////////////////////////////////////
// 220429 Queue Using Tswo Stacks algo.js
////////////////////////////////////////////

function processData(input) {
    //Enter your code here
    console.log({input});
    
    // Retrieve list of operations from the input
    let operations = [];
    let operation = "";
    for (let x=0; x<input.length; x++) {
        let char = input[x];
        if (char != '\n' && char != ' ') {
            operation += char;
            console.log("char:", char, "| operation:", operation);
        } else {
            operations.push(parseInt(operation));
            operation = "";
        }
    }
    operations.push( parseInt(operation));
    console.log({operations});

    let queue = [];
    // Iterate through the operations
    for (let x = 1; x<operations.length; x++) {
        operation = operations[x];
        if (operation == 1) {
            x++;
            let number = operations[x];
            queue.push(number);
            console.log("Operation:", operation, "| action: enqueue", number, "| queue", queue);
        } else if (operation == 2) {
            queue.shift();
            console.log("Operation:", operation, "| action: dequeue | queue", queue);
        } else if (operation == 3) {
            console.log("Operation:", operation, "| action: print", queue[0]);
        }
    }
} 

processData('10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2');