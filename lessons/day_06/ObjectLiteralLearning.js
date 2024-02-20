// Create
let teo = {
    name: "Teo",
    "my age": 18,
};

// Read: dot notation (no space), [] syntax (has space)
console.log(teo.name); // Teo
console.log(teo["my age"]); // 18

// Update
teo.name = "Tun";
teo["my age"] = 22;
teo.gender = "M";
console.log(teo); // { name: 'Tun', 'my age': 22, gender: 'M' }

// Delete properties
delete teo["my age"];
console.log(teo); // { name: 'Tun', gender: 'M' }

// Delete object
delete teo;
console.log(teo);