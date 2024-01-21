function divide(firstNum, secondNum) {
    let result = firstNum / secondNum;
    return Math.round(result);
    // return Math.ceil(result); // always round up
    // return Math.floor(result); // always round down
}

console.log("Value :", divide(10, 3)); // 3
console.log("Value :", divide(10, 4)); // 3

console.log("Value :", divide(10)); // NaN
console.log("Type :", typeof divide(10)); // number