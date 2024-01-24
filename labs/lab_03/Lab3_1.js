// Count how many odd, even number(s) in an integer array

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