const EXPECTED_TIME = 7;
let arrivalTime = 8;
let isHeOnTime = arrivalTime === EXPECTED_TIME;

if(isHeOnTime)
    console.log("Let's talk!"); 
else
    console.log("Write a letter!");

console.log("End program!");

// TernaryOperator
console.log("----------");
let msgContent = '';
msgContent = isHeOnTime ? "You're on time" : "You're late";
console.log(msgContent);

// Multiple if else
console.log("----------");
let clientAge = 35;
if (clientAge < 18)
    console.log("No sale!");
else if (clientAge <= 55)
    console.log("Unlimited!");
else
    console.log("Only 2!");    