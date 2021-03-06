"use strict";

const prompt = require("prompt-sync")();
const atm = require("./atm");

const bankName = "devOlu";

console.log(`Welcome to ${bankName} ATM Terminal`);

// Call validate pin functiono
atm.valid();

function operationToPerform() {
  console.log(
    `What operation would you like to perform today?\n\nEnter:\n1 to Check Balance\n2 to Withdraw\n3 to Deposit\n4 to Exit\n`
  );
  let choice = Number(prompt());
  return choice;
}

//users choice stored in CHOICE variable
//let choice = operationToPerform();

function performOperation() {
  let choice = operationToPerform();
  switch (choice) {
    case 1: //get balance
      atm.balance();
      reprompt();
      break;
    case 2: //withdraw
      atm.withdraw();
      reprompt();
      break;
    case 3: //deposit
      atm.deposit();
      reprompt();
      break;
    case 4: //exit
      console.log(`Goodbye!`);
      return;
    default:
      operationToPerform();
  }
}

performOperation();

function reprompt() {
  console.log(
    `Would you like to perform another transaction? Enter:\n1 for yes\n2 for no\n`
  );
  let response = prompt();
  if (response == 2) {
    console.log(`Thank you for using ${bankName}. Have a nice day!`);
  } else {
    performOperation();
  }
}
