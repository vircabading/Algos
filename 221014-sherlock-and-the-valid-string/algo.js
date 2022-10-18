//////////////////////////////////////////////////////
// 221014 Sherlock and the Valid String algo.js
//////////////////////////////////////////////////////

/**
 * The function accepts STRING s as parameter.
 * The function is expected to return a STRING.
 */

function isValid(s) {
    // Pseudo Code
    // Create a hash map of all the letters in the string s
    // Iterate through the has map to find
    //      1. Sum of number of occurences
    //      2. Number of different letters
    //      3. Highest number of occurences
    //      4. Lowest number of occurences
    // Evaluate the values found
    //      1. If sum modulus number of letters equals zero
    //          and the highest and lowest num of occurences is the same
    //              Then return "YES"
    //      2. If sum modulus numver of letters equals one
    //          and the highest num of occurences is only one more than the
    //          lowest number of occurences
    //              Then return "Yes"
    //      3, All other cases return "No"

    if (s.length < 2) {
        return "YES"
    }

    // Create a hash map of all the letters in the string s
    let letterMap = new Map();
    for (let char of s) {
        char = char.toLowerCase();
        if (letterMap.has(char)) {
            letterMap.set(char,letterMap.get(char)+1)
        } else {
            letterMap.set(char, 1);
        }
    }

    // console.log({letterMap});
    // console.log("*** Done Creating Hash Map ******");

    // Iterate through the has map to find
    //      1. Sum of number of occurences
    //      2. Number of different letters
    //      3. Highest number of occurences
    //      4. Lowest number of occurences
    let sumCount = 0;
    let numLetters = 0;
    let lowestCount = 0;
    let highestCount = 0;

    letterMap.forEach((val,key) => {
        // console.log("Value:", val, "| Key:", key);
        sumCount = sumCount + val;
        numLetters++;
        if (lowestCount === 0) {
            lowestCount = val;
        } else if (val < lowestCount) {
            lowestCount = val;
        }
        if (highestCount === 0) {
            highestCount = val;
        } else if (val > highestCount) {
            highestCount = val;
        }
    });
    // console.log("Sum:", sumCount, "| Number of Letters:", numLetters);
    // console.log("Lowest Count:", lowestCount, "| Highest Count:", highestCount);
    // console.log("*** Done evaluating letters hash map ******")

    // Evaluate the values found
    //      1. If sum modulus number of letters equals zero
    //          and the highest and lowest num of occurences is the same
    //              Then return "YES"
    //      2. If sum modulus numver of letters equals one
    //          and the highest num of occurences is only one more than the
    //          lowest number of occurences
    //              Then return "Yes"
    //      3. If sum modulus (number of letters minus 1) equals number of letters - 1
    //          and the lowest number of occurences is one
    //          and all the other occurences are equal
    //              Then return "YES"
    //      4. All other cases return "No"

    // Evaluation #1
    if (( sumCount % numLetters === 0 ) && ( lowestCount === highestCount )) {
        return 'YES'
    }

    // Evaluation #2
    else if (( sumCount % numLetters === 1 ) && ( highestCount - lowestCount === 1 )) {
        return 'YES'
    }

    // Evaluation #3
    else if (( ((sumCount-1) % (numLetters-1)) === 0 ) && ( lowestCount === 1 )) {
        let countArray = [];
        letterMap.forEach((val,key) => {
            // console.log("Key:", key, "| Count:", val);
            countArray.push(val);
        });
        countArray.sort((a,b) => b-a);
        countArray.pop();
        // console.log(countArray);
        if (highestCount === countArray[countArray.length-1]) {
            return 'YES';
        }
    }

    // Evaluation #4
    return "NO";
}

console.log("*******************************************");
console.log("Sherlock and the Valid String Algorithm");
console.log("*******************************************\n");

const s1 = 'a';
const expect1 = 'YES';

console.log("String:", s1, "| Expected return:", expect1);
console.log("Is Valid String:", isValid(s1), "\n");

const s2 = 'aBc';
const expect2 = 'YES';

console.log("String:", s2, "| Expected return:", expect2);
console.log("Is Valid String:", isValid(s2), "\n");

const s3 = 'aBbc';
const expect3 = 'YES';

console.log("String:", s3, "| Expected return:", expect3);
console.log("Is Valid String:", isValid(s3), "\n");

const s4 = 'aBbcb';
const expect4 = 'NO';

console.log("String:", s4, "| Expected return:", expect4);
console.log("Is Valid String:", isValid(s4), "\n");

const s5 = 'aaBcb';
const expect5 = 'YES';

console.log("String:", s5, "| Expected return:", expect5);
console.log("Is Valid String:", isValid(s5), "\n");

const s6 = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
const expect6 = 'YES';

console.log("String:", s6, "| Expected return:", expect6);
console.log("Is Valid String:", isValid(s6), "\n");