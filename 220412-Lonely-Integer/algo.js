/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    const aHash = new Map();
    console.log({aHash});

    for (let idx=0; idx<a.length; idx++) {
        console.log(a[idx]);
    }
}

console.log("lonelyinteger[1,2,3,4,3,2,1]:", lonelyinteger( [1,2,3,4,3,2,1] ));