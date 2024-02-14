// Count how many odd, even number(s) in an integer array

const { 
    filterEvenNumber,
    filterOddNumber
} = require('../../utils/ArrayHelper');

// 1st approach
let intArr = [1, 2, 3, 4, 5];
let evenNumCount = 0;
let oddNumCount = 0;

for (const value of intArr) {
    if (value % 2 === 0)
        evenNumCount++;
    else
        oddNumCount++;
}
console.log("Even numbers:", evenNumCount);
console.log("Odd numbers:", oddNumCount);

// 2nd approach | Delegation
let totalEvenNumber = intArr.filter(filterEvenNumber).length;
let totalOddNumber = intArr.filter(filterOddNumber).length;
console.log("total even numbers:", totalEvenNumber);
console.log("total odd numbers:", totalOddNumber);