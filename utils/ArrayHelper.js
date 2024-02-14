const filterEvenNumber = function(value, index, array) {
    return value % 2 === 0;
}

const filterOddNumber = function(value, index, array) {
    return value % 2 !== 0;
}

const convertToEvenNumber = function(value, index, array) {
    if (value % 2 !== 0)
        return value + 1;
    else
        return value; 
}

const sortNumberASC = function (firstNum, secondNum) {
    return firstNum - secondNum;
}
const sortNumberDESC = function (firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    filterOddNumber: filterOddNumber,
    convertToEvenNumber: convertToEvenNumber,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}