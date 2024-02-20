const readline = require('readline-sync');

let isPlaying = true;
while(isPlaying) {
    printGameMenu();
    let userOption = getUserOption();
    if(userOption == 0) {
        isPlaying = false;
    } else if(userOption == 1) {
        // Generate random number (1 -> 10)
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log("Lucky number is:", randomNumber);    
    } else
        console.log("Nhap sai!");
}

console.log("Thank you. See you again!");

function printGameMenu() {
    console.log("=====GAME MENU=====");
    console.log("1. Generate a random number (1 -> 10)");
    console.log("0. Exit!");
}

function getUserOption() {
    return readline.question("Please select an option: ");
}