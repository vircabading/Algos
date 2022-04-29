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
        if (char != '\n') {
            operation += char;
            console.log("char:", char, "| operation:", operation);
        } else {
            operations.push(operation);
            operation = "";
        }
    }
    operations.push(operation);
    console.log({operations});
} 

processData('10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2');