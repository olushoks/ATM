const prompt = require("prompt-sync")();
const account = require("./account");

// function to get balance
function getBalance() {}

// function for withdrawals
function withdraw() {}

// function to deposit
function deposit() {}

// function to request and valid pin
function validatePin() {
  let enteredPin = Number(prompt(`Enter your PIN to continue`));
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
