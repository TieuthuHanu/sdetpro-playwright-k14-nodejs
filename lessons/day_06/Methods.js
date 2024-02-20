let teo = {
    name: "Teo",
    age: 18,
    bankAccount: {
        accNum: "11223344",
        balance: 1000000
    }
};

// Object.keys(targetObject)
console.log(Object.keys(teo)); // [ 'name', 'age', 'bankAccount' ]

// Object.values(targetObject)
console.log(Object.values(teo)); // [ 'Teo', 18, { accNum: '11223344', balance: 1000000 } ]

// Object.entries(targetObject) -> map
console.log(Object.entries(teo));
// [
//     [ 'name', 'Teo' ],
//     [ 'age', 18 ],
//     [ 'bankAccount', { accNum: '11223344', balance: 1000000 } ]
// ]