let phoneList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
]);

let emergencyList = new Map();
emergencyList.set('113', 'Police Dept');
emergencyList.set('114', 'Fire Dept');
emergencyList.set('115', 'Hospital');
emergencyList.set('116', 'Others');

console.log(emergencyList.get('113'));
console.log(`Is 113 key existing? ${emergencyList.has("113")}`);

for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}
console.log("=====================");
for (const value of emergencyList.values()) {
    console.log(`value: ${value}`);
}
console.log("======Iterator=======");
console.log(Array.from(emergencyList.keys())[0]); // 113
console.log(`Map size: ${emergencyList.size}`); // Map size: 4

emergencyList.delete('116');
console.log(`Map size: ${emergencyList.size}`); // Map size: 3
printTheMap(emergencyList);

function printTheMap(emergencyList){
    for (const key of emergencyList.keys()) {
        console.log(`${key}: ${emergencyList.get(key)}`);
    }
}