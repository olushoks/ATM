const prompt = require("prompt-sync")();
const account = require("./account");
const atm = require("./atm");

const bankName = "devOlu";

console.log(`Welcome to ${bankName} ATM Terminal`);

// Call validate pin functiono
atm.valid();

function operationToPerform() {
  let choice = Number(
    prompt(
      `What operation would you like to perform today?\n\nEnter:\n1 to Check Balance\n2 to Withdraw\n3 to Deposit\n`
    )
  );
  return choice;
}

//users choice stored in CHOICE variable
let choice = operationToPerform();

function performOperation(choice) {
  switch (choice) {
    case 1:
      //get balance
      atm.balance();
      break;
    case 2:
      //withdraw
      atm.withdraw(account.balance);
      break;
    case 3:
      //deposit
      atm.deposit(account.balance);
      break;
    case 4:
    //exit
    default:
      operationToPerform();
  }
}

performOperation(choice);
