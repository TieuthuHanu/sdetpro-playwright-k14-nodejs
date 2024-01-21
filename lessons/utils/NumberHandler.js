function divide(firstNum, secondNum) {
    return Math.round(firstNum / secondNum);
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

module.exports = {
    divide: divide,
    isEvenNumber: isEvenNumber
}