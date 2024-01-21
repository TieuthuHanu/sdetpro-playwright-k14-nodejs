// const NumberHandler = require('../utils/NumberHandler');
// console.log("Result:", NumberHandler.divide(10, 3));
// console.log("Is it even number?", NumberHandler.isEvenNumber(5));

// Destructuring
const {
    divide,
    isEvenNumber
} = require('../utils/NumberHandler');

console.log("Result:", divide(10, 3));
console.log("Is it even number?", isEvenNumber(5));

