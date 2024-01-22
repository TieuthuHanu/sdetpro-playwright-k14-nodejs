/**
 * CRUD: Create Read Update Delete
 */

// Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

console.log("Array length:", myNumArray.length); // 5
console.log("Value of second num:", myNumArray[1]); // 2

myNumArray[1] = 100;
console.log("Value of second num after updating:", myNumArray[1]); // 100
console.log("----------");
console.log(myNumArray[99]); // undefined

// myNumArray[10] = 1001;
// console.log(myNumArray); // [ 1, 100, 3, 4, 5, <5 empty items>, 1001 ]

// Add last, remove last, remove first (shift the array to left)
myNumArray.push(12); 
console.log(myNumArray); // [ 1, 100, 3, 4, 5, 12 ]
console.log("Remove last element:", myNumArray.pop()); // 12
console.log("Remove first element:", myNumArray.shift()); // 1
console.log(myNumArray); // [ 100, 3, 4, 5 ]

// Deleting | splice(from index, number of element removed)
console.log(myNumArray.splice(0, 2)); // [ 100, 3 ]
console.log(myNumArray); // [ 4, 5 ]

// Inserting & replacing | 
// spilce(at index, number of element removed, element value) 
let myNewArray = [1, 3, 4, 5];
myNewArray.splice(1, 0, 2);
console.log(myNewArray); // [ 1, 2, 3, 4, 5]


// Array Constructor
// let viaConstructor = new Array(1, 2, 3, 4, 5);