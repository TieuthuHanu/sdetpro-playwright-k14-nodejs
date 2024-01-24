/**
 * Do NOT use any built-in sort method. 
 * Please write a sort logic to sort an integer array from min to max
 * Input: [12, 34, 1, 16, 28]
 * Expected output: [1, 12, 16, 28, 34]
 */

let inputArr = [12, 34, 1, 16, 28]
let temp;

for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
        if (inputArr[i] > inputArr[j]) {
            temp = inputArr[i];
            inputArr[i] = inputArr[j];
            inputArr[j] = temp;
        }
    }
}

console.log("Sorted array:", inputArr);