/**
 * Finding maximum value/minimum value from an integer array
 * intArr = [1, 2, 3, 4, 5];
 * Minimum: 1
 * Maximum: 5
 */

let intArr = [1, 2, 3, 4, 5];
let max = intArr[0];
let min = intArr[0];

for (let i = 1; i < intArr.length; i++) {
    if (max < intArr[i])
        max = intArr[i];
    else if (min > intArr[i])
        min = intArr[i];
}

console.log("Maximum value:", max);
console.log("Minimum value:", min);