/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {

    // Create a Hash Map
    const aHash = new Map();
    console.log({aHash});

    // Iterate through the array
    for (let idx=0; idx<a.length; idx++) {
        // if item in the array is not in the hashMap, add it to the hashMap
        if (!aHash.has(a[idx])) {
            aHash.set(a[idx], 1);
        // otherwise, remove the item from the hashmap
        } else {
            aHash.delete(a[idx]);
        }
        console.log({aHash});
    }
}

console.log("lonelyinteger[1,2,3,4,3,2,1]:", lonelyinteger( [1,2,3,4,3,2,1] ));