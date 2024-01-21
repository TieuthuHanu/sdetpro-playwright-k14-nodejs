// Function declaration | hoisting
let myReturn = functionName();
console.log(myReturn); // 2

function functionName() {
    return 2;
}

// Function expression | NO hoisting
const addNumber = function(firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(addNumber(8, 1)); // 9
