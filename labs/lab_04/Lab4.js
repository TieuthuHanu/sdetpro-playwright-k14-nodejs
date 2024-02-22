const readlineSync = require('readline-sync');

const account1 = {
    accountNumber: '123',
    routingNumber: '321',
    balance: 10000,
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = '456';
account2.balance = 5000;
const bankAccounts = [ account1, account2 ];

function myBankApp() {
    printGameMenu();

    const userOption = Number(readlineSync.question('Please select an option: '));
    switch (userOption) {
        case 1:
            const account = findAccount();
            _logAccountInfo(account);
            break;
        case 2:
            withdrawMoney();
            break;
        case 0:
            console.log('Goodbye!');
            break;
        default:
            console.log('Wrong option!');
    }
}

function printGameMenu() {
    console.log(`
    === Banking application===
    1. Find an account
    2. Update balance
    0. Exit the program
    `);
}

function findAccount() {
    const accountNumber = readlineSync.question('Please input account number: ');
    return bankAccounts.find(function (account) {
        if (account.accountNumber === accountNumber)
            return account;
    });
}

function withdrawMoney() {
    const account = findAccount();
    _logAccountInfo(account);

    const amountToWithdraw = Number(readlineSync.question('Please enter an amount: '));
    const currentBalance = account.balance;
    if (currentBalance < amountToWithdraw) {
        console.log('Insufficient balance!!');
        return;
    }

    account.balance = currentBalance - amountToWithdraw;
    _logAccountInfo(account);
}

function _getAccountNumber() {
    return readlineSync.question('Please input account number: ');
}

function _logAccountInfo(account) {
    if (account)
        console.log('Your account is:', account);
    else
        console.log('There is no account with provided info');
}

myBankApp();