const {
    filterEvenNumber,
    convertToEvenNumber,
    sortNumberASC,
    sortNumberDESC,
} = require('../../utils/ArrayHelper');

let myNumArray = [1, 2, 3, 4, 5];

// forEach : 12345
let targetStr = '';
const convertToNoSpaceStr = function (value, index, array) {
    targetStr += value;
}
myNumArray.forEach(convertToNoSpaceStr);
console.log("String:", targetStr); // 12345

// FILTER
const evenArray = myNumArray.filter(filterEvenNumber);
for (const value of evenArray) {
    console.log("Filter:", value);
}

// MAP
const evenNumArray = myNumArray.map(convertToEvenNumber);
for (const value of evenNumArray) {
    console.log("Map:", value);
}

// SORT string: Asc, Desc
let myStr = ['B', 'A', 'C'];
console.log(myStr.sort()); // [ 'A', 'B', 'C' ]
console.log(myStr.reverse()); // [ 'C', 'B', 'A' ]

// SORT number
let complexNumArray = [100, 22, 19];
console.log(complexNumArray.sort(sortNumberASC)); // [ 19, 22, 100 ]
console.log(complexNumArray.sort(sortNumberDESC)); // [100, 22, 19 ]