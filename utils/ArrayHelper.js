function filterEvenNumber(value, index, array) {
    return value % 2 === 0;
}

function convertToEvenNumber(value, index, array) {
    if (value % 2 !== 0)
        return value + 1;
    else
        return value; 
}

function sortNumberASC(firstNum, secondNum) {
    return firstNum - secondNum;
}
function sortNumberDESC(firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    convertToEvenNumber: convertToEvenNumber,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}