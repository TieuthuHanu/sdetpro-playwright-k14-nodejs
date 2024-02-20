let teo = {
    name: "Teo",
    age: 18,
    bankAccount: {
        accNum: "11223344",
        balance: 1000000
    }
};

// Shallow copy - spread syntax - one level
let ti = { ...teo };
ti.name = "Ti";
ti.bankAccount.balance = 1;

console.log(teo);
// {
//     name: 'Teo',
//     age: 18,
//     bankAccount: { accNum: '11223344', balance: 1 }
// }
console.log(ti);
// {
//     name: 'Ti',
//     age: 18,
//     bankAccount: { accNum: '11223344', balance: 1 }
// }

// Shallow copy - handle for nested object, array.. 
// (NOT for function, circular reference)
let teoA = {
    name: "TeoA",
    age: 18,
    bankAccount: {
        accNum: "11223344",
        balance: 1000000
    }
};

let tiA = JSON.parse(JSON.stringify(teoA));
tiA.name = "TiA";
tiA.bankAccount.balance = 2;

console.log(teoA);
console.log(tiA);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merge = [...arr1, ...arr2];
console.log(merge); // [ 1, 2, 3, 4, 5, 6 ]