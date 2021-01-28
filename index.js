"use strict";

const prompt = require("prompt-sync")();
const atm = require("./atm");

const bankName = "devOlu";

console.log(`Welcome to ${bankName} ATM Terminal`);

// Call validate pin functiono
atm.valid();

function operationToPerform() {
  let choice = Number(
    prompt(
      `What operation would you like to perform today?\n\nEnter:\n1 to Check Balance\n2 to Withdraw\n3 to Deposit\n4 To Check Wallet\n5 to Exit\n`
    )
  );
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
    case 4: //wallet
      atm.wallet();
      reprompt();
      break;
    case 5: //exit
      console.log(`Goodbye!`);
      return;
    default:
      operationToPerform();
  }
}

performOperation();

function reprompt() {
  let response = prompt(
    `Would you like to perform another transaction? Enter:\n1 for yes\n2 for no\n`
  );
  if (response == 2) {
    console.log(`Thank you for using ${bankName}. Have a nice day!`);
  } else {
    performOperation();
  }
}
