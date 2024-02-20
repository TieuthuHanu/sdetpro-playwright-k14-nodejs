let teo = {
    name: "Teo",
    age: 18,
};

// let ti = teo;
// ti.name = "Ti";
// ti.age = 19;

// console.log(teo); // { name: 'Ti', age: 19 }
// console.log(ti); // { name: 'Ti', age: 19 }

let array = [teo, teo];
array[1].name = "Ti";
console.log(array); // both change