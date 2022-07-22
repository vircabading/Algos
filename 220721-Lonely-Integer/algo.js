/////////////////////////////////////////////////////
// 220721 Lonely Integer Algo.js
/////////////////////////////////////////////////////

/**
 * The function accepts INTEGER_ARRAY a as parameter.
 * The function is expected to return an INTEGER.
 */

function lonelyinteger(a) {
    // Pseudo Code
    // Iterate through the array
    //      map each integer
    //          if int not on map, then map it
    //          if int on map, then delete it
    // return the lone mapped int
    console.log({a});

    const lonelyIntMap = new Map();

    // Iterate through the array and map each int
    for (let num of a) {
        console.log({num});
        if (lonelyIntMap.has(num)) {
            lonelyIntMap.delete(num)
        } else {
            lonelyIntMap.set(num, 1);
        }
        console.log("Map:", lonelyIntMap)
    }

    // Return the long mapped int
    lonelyIntMap.forEach((value,key) => {
        console.log("Key:", key, "| Value:", value);
    })
}

console.log("******************************");
console.log("Lone Integer Algorithm");
console.log("******************************\n");

console.log(lonelyinteger([1,2,3,4,3,2,1]));