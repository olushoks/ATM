const prompt = require("prompt-sync")();
const account = require("./account");

// function to get balance
function getBalance() {
  prompt(`Your account balance is: $${account.balance}`);
  operationToPerform();
}

// function for withdrawals
function withdraw(currentBalance) {
  let amountToWithdraw = Number(
    prompt(`How much would you like to withdraw today?\n$`)
  );
  if (amountToWithdraw > currentBalance) {
    console.log(
      `You do not have sufficent funds to withdraw this amount.\nPlease  enter a lesser amount:\n`
    );
    withdraw(currentBalance);
  } else {
    currentBalance -= amountToWithdraw;
    account.balance = currentBalance;
    console.log(`Please take your cash!`);
    console.log(`You new balance is $${account.balance}\n`);
  }
}

// function to deposit
function deposit(currentBalance) {
  let amountToDeposit = Number(
    prompt(`Enter the amount you like to deposit today\n$`)
  );
  if (amountToDeposit <= 0) {
    console.log(`Please enter an amount greater than $0.00`);
    deposit(currentBalance);
  } else {
    currentBalance += amountToDeposit;
    account.balance = currentBalance;
    console.log(`Transaction succesful`);
    console.log(`You new balance is $${account.balance}\n`);
  }
}

// function to request and valid pin
function validatePin() {
  let enteredPin = Number(prompt(`Enter your PIN to continue\n`));
  if (enteredPin === account.pin) {
    console.log(`Success!`);
  } else if (enteredPin !== account.pin) {
    validatePin();
  }
}

module.exports = {
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  valid: validatePin,
};
