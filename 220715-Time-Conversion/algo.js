/////////////////////////////////////////////////
// 220715 Time Conversion Algo.js
/////////////////////////////////////////////////

/**
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Convert string s into an array representing time
    let time = s.split("");

    // Determine if it's PM or not
    const isPM = time[8] === 'P';

    // Retrieve the hour
    let hour = parseInt(time[0] + time[1]);
    
    // Convert the hour to the corrected hour
    if (isPM && hour < 12) {
        hour = hour + 12;
    } else if (!isPM && hour === 12) {
        hour = 0;
    }

    // Return the corrected time output
    if (hour < 10) {
        return "0" + hour + ":" + time[3] + time[4] + ":" + time[6] + time[7];
    }
    return hour + ":" + time[3] + time[4] + ":" + time[6] + time[7];
}

console.log("*******************************");
console.log("Time Conversion Algorithm");
console.log("*******************************\n");

console.log("timeConversion('07:05:45PM'):", timeConversion('07:05:45PM'), "\n");
console.log("timeConversion('12:01:00PM'):", timeConversion('12:01:00PM'), "\n");
console.log("timeConversion('12:01:00AM'):", timeConversion('12:01:00AM'), "\n");