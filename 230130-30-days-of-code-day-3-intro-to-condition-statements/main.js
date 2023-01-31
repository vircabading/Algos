// 30 Days of Code: Day 3 - Into to Condition Statements

const isWeird = (N) => {
    // If N is odd, print Weird
    if (N % 2 == 1) {
        console.log("Weird");
    }
    else {
        // if N is odd and is in the range of 6 to 20, print Weird
        if ((N>=6) && (N<=20)) {
            console.log("Weird");
        }

        // Otherwise, print Not Weird
        else {
            console.log("Not Weird");
        }
    }
}

console.log("*******************************");
console.log("30 Days of Code: (Day 3) Intro to condition statements\n");

console.log("*******************************");
console.log("Number: 3");
isWeird(3);
