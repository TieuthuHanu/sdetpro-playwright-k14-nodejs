/**
 * [3, 7, 22, 1], target number: 8
 * [index, index] that sum of them = target number
 * Assumption: only one indicee existing
 */

// Hint 1: nested loop -> O(n^2)
const givenArr = [3, 7, 22, 1];
const targetNum = 8;
console.log(findIndiceNestedLoop(givenArr, targetNum));

function findIndiceNestedLoop(givenArr, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < givenArr.length; firstNumIndex++) {
        const firstNum = givenArr[firstNumIndex];
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < givenArr.length; secondNumIndex++) {
            const secondNum = givenArr[secondNumIndex];
            if (secondNum === targetNum - firstNum) {
                return ([firstNumIndex, secondNumIndex]);
            }
        }
    }
    return [];
}

// Hint 2: using map -> O(n)
console.log(findIndiceUsingMap(givenArr, targetNum));

function findIndiceUsingMap(givenArr, targetNum) {
    let numberMap = new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArr.length; firstNumIndex++) {
        const firstNum = givenArr[firstNumIndex];
        const lookingNum = targetNum - firstNum;
        if (numberMap.has(lookingNum)) {
            return [numberMap.get(lookingNum), firstNumIndex];                
        }
        numberMap.set(firstNum, firstNumIndex);
    }
    return [];
}