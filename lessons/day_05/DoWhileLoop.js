const readline = require('readline-sync');

let guessingTime = 0;
let randomNum = getRandomNumber();

do {
    let userNum = getUserNum();
    if(userNum === randomNum) {
        console.log("Winner!!!");
        break;
    }
    guessingTime++;
} while(guessingTime < 3);

if(guessingTime === 3)
    console.log("Better luck next time!");

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNum() {
    return readline.question("Please enter your number: ");
}