const readline = require('readline-sync');

const inputNum = getUserInputNum();

switch (inputNum) {
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thursday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
    case "8":
        console.log("Weekend");
        break;
    default:
        console.log("Not valid input, only 2 -> 8");
}

function getUserInputNum() {
    return readline.question("Please select an option: ");
}