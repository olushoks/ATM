"use strict";

const prompt = require("prompt-sync")();
const account = require("./account");
const wallet = require("./wallet");

// function to request and valid pin
function validatePin() {
  let enteredPin = Number(prompt(`Enter your PIN to continue\n`));
  if (enteredPin === account.pin) {
    console.log(`Success!\n----`);
  } else if (enteredPin !== account.pin) {
    console.log(`--> Wrong PIN`);
    validatePin();
  }
}
// function to get balance
function getBalance() {
  console.log(`Your account balance is: $${account.balance}\n----`);
}

// function for withdrawals
function withdraw() {
  let amountToWithdraw = Number(
    prompt(`How much would you like to withdraw today?\n$`)
  );
  if (amountToWithdraw > account.balance) {
    console.log(
      `‽--> You do not have sufficent funds to withdraw this amount.\nPlease  enter a lesser amount:\n`
    );
    withdraw();
  } else {
    account.balance -= amountToWithdraw;
    console.log(`--> Please take your cash!\n----`);
    console.log(`You new balance is $${account.balance}\n----`);
  }
  return wallet.allWithdrawals.push(amountToWithdraw);
}

// function to deposit
function deposit() {
  let amountToDeposit = Number(
    prompt(`--> Enter the amount you like to deposit today\n$`)
  );
  if (amountToDeposit <= 0) {
    console.log(`--> Please enter an amount greater than $0.00`);
    deposit();
  } else {
    account.balance += amountToDeposit;
    // account.balance = currentBalance;
    console.log(`Transaction succesful`);
    console.log(`You new balance is $${account.balance}\n----`);
  }
  return wallet.allDeposit.push(amountToDeposit);
}

function checkWallet() {
  let choice = Number(
    prompt(
      `Would you like to check your deposits wallet or withdrawals wallet?\n1 for Deposits\n2 for Withdrawals\n`
    )
  );
  if (choice === 1) {
    let deposit = wallet.allDeposit.reduce((total, el) => total + el, 0);
    console.log(`Your deposit(s) so far:\n${wallet.allDeposit.join("$\n")}`);
    console.log(`Your Total Deposit is: $${deposit}`);
  } else if (choice === 2) {
    let withdrawal = wallet.allWithdrawals.reduce((total, el) => total + el, 0);
    console.log(
      `Your withdrawals so far:\n${wallet.allWithdrawals.join("\n")}`
    );
    console.log(`Your Total Withdrawals is: $${withdrawal}`);
  }
}

module.exports = {
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  wallet: checkWallet,
  valid: validatePin,
};
