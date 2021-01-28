const prompt = require("prompt-sync")();
const atm = require("./atm");

const bankName = "devOlu";

console.log(`Welcome to ${bankName} ATM Terminal`);

// Call validate pin functiono
atm.valid();
