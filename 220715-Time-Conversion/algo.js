/////////////////////////////////////////////////
// 220715 Time Conversion Algo.js
/////////////////////////////////////////////////

/**
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    console.log({s});

    // Convert string s into an array representing time
    time = s.split("");

    // Determine if it's PM or not
    const isPM = time[8] === 'P';
    console.log({isPM});

    // Retrieve the hour
    let hour = parseInt(time[0] + time[1]);
    console.log({hour});
}

console.log("*******************************");
console.log("Time Conversion Algorithm");
console.log("*******************************\n");

console.log("timeConversion('07:05:45PM'):", timeConversion('07:05:45PM'));