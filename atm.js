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

  if (wallet.availableCash <= 0) {
    // Wallet has no cash to dispense
    console.log(
      `‽--> This machine is temporarily unable to dispense cash\nPlease try again later!`
    );
  } else if (amountToWithdraw > wallet.availableCash) {
    // user s tryinig to withdraw more than available cash in wallet
    console.log(
      `‽--> This machine is currently unable to dispense that amount.\nPlease enter a lesser amount:\n`
    );
    withdraw();
  } else if (amountToWithdraw <= 0) {
    //user is enterinig an amount less than 0
    console.log(`‽--> Please enter amount greater than $0.00:\n`);
    withdraw();
  } else if (amountToWithdraw > account.balance) {
    //user trying to wiithdrawn more than their balance
    console.log(
      `‽--> You do not have sufficent funds to withdraw this amount.\nPlease  enter a lesser amount:\n`
    );
    withdraw();
  } else {
    // Enough cash both in wallet and users account
    wallet.availableCash -= amountToWithdraw;
    account.balance -= amountToWithdraw;
    console.log(`--> Please take your cash!\n----`);
    console.log(`You new balance is $${account.balance}\n----`);
  }
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
    wallet.availableCash += amountToDeposit;
    account.balance += amountToDeposit;
    console.log(`Transaction succesful`);
    console.log(`You new balance is $${account.balance}\n----`);
  }
}

module.exports = {
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  valid: validatePin,
};
