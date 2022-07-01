/////////////////////////////////////////
// 220701 Climbing Stairs Algorithm.js
/////////////////////////////////////////

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // Pseudocode
    // for each number until 1
    // add either a 1 or 0 to each possible answer
    // if the possible answer adds up to n, then increase the number of answers
    // after all posibilities tried return the number of answers

    var getTotal = (arr) => {
        let total = 0;
        for (let x=0; x<arr.length; x++) {
            total += arr[x];
        }
        return total;
    }

    let numAns = 0;
    let posAns = [];

    for (let x=1; x<=n; x++) {
        console.log({x});
        console.log({posAns});
        let newPosAns = [];

        if (posAns.length == 0) {
            if (1 == n) {
                numAns++;
            } else {
                newPosAns.push(1);
            }
            if (2 == n) {
                numAns++;
            } else {
                newPosAns.push(2);
            }
        } else {
            console.log("Found non empty posAns", posAns);
            for (curPosAns of posAns) {
                console.log({curPosAns});
                if ((curPosAns + 1) == n) {
                    numAns++;
                } else {
                    if ((curPosAns + 1) < n) {
                        newPosAns.push(curPosAns + 1)
                    }
                }
                if ((curPosAns + 2) == n) {
                     numAns++;
                } else {
                    if ((curPosAns + 2) < n) {
                        newPosAns.push(curPosAns + 2);
                    }
                }
            }
        }

        posAns = newPosAns;
    }

    return numAns;
};

console.log("*****************************");
console.log("Climbing Stairs Algorithm");
console.log("*****************************\n");

console.log("climbStairs(2)", climbStairs(2));
console.log("climbStairs(3)", climbStairs(3));