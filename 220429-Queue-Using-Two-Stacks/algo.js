////////////////////////////////////////////
// 220429 Queue Using Tswo Stacks algo.js
////////////////////////////////////////////

function processData(input) {
    // Retrieve list of operations from the input
    let operations = [];
    let operation = "";
    for (let x=0; x<input.length; x++) {
        let char = input[x];
        if (char != '\n' && char != ' ') {
            operation += char;
        } else {
            operations.push(parseInt(operation));
            operation = "";
        }
    }
    operations.push( parseInt(operation));

    let queue = [];
    // Iterate through the operations
    for (let x = 1; x<operations.length; x++) {
        operation = operations[x];
        if (operation == 1) {
            x++;
            let number = operations[x];
            queue.push(number);
        } else if (operation == 2) {
            queue.shift();
        } else if (operation == 3) {
            console.log(queue[0]);
        }
    }
} 

processData('10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2');