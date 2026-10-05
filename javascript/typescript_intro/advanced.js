"use strict";
// ── ENUMS ─────────────────────────────────────────────
// An enum is a set of named constants
// Better than plain strings for fixed sets of values
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Created"] = 201] = "Created";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
let move = Direction.Up;
console.log(`Moving: ${move}`);
let httpStatus = HttpStatus.OK;
console.log(`Status: ${httpStatus}`);
function handleResponse(status) {
    if (status === HttpStatus.OK)
        return "Success!";
    if (status === HttpStatus.NotFound)
        return "Page not found.";
    if (status === HttpStatus.Unauthorized)
        return "Please log in.";
    return "Something went wrong.";
}
console.log(handleResponse(HttpStatus.OK));
console.log(handleResponse(HttpStatus.NotFound));
console.log(handleResponse(HttpStatus.Unauthorized));
// ── TYPE NARROWING ────────────────────────────────────
// TypeScript can figure out what type something is
// inside an if block — called "narrowing"
function processInput(input) {
    if (typeof input === "string") {
        // TypeScript KNOWS input is a string here
        return `Text: ${input.toUpperCase()}`;
    }
    else {
        // TypeScript KNOWS input is a number here
        return `Number: ${input.toFixed(2)}`;
    }
}
console.log(`\n${processInput("hello")}`);
console.log(processInput(3.14159));
const update = {
    name: "Laura Shavia Updated"
    // don't need to include id, email etc
};
console.log("\nPartial update:", update);
const publicProfile = {
    id: 1,
    name: "Laura",
    role: "admin"
    // no password or email exposed!
};
console.log("Public profile:", publicProfile);
const safeUser = {
    id: 1,
    name: "Laura",
    email: "laura@techsavanna.com",
    role: "admin"
    // password field doesn't exist on this type
};
console.log("Safe user:", safeUser);
const config = {
    host: "localhost",
    port: 3000,
    debug: false
    // all three are now REQUIRED — TypeScript errors if any missing
};
console.log("Config:", config);
// ── CLASSES WITH TYPES ────────────────────────────────
class BankAccount {
    balance; // only accessible inside this class
    owner; // accessible anywhere
    id; // can never be changed after creation
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
        this.id = `ACC-${Date.now()}`;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Amount must be positive");
        this.balance += amount;
        console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance)
            throw new Error("Insufficient funds");
        this.balance -= amount;
        console.log(`Withdrew ${amount}. Balance: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    interestRate;
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        const interest = this.getBalance() * this.interestRate;
        this.deposit(interest);
        console.log(`Interest added: ${interest}`);
    }
}
console.log("\n--- Typed Bank Accounts ---");
const account = new BankAccount("Laura", 5000);
account.deposit(1000);
account.withdraw(500);
console.log(`Final balance: ${account.getBalance()}`);
const savings = new SavingsAccount("Laura", 10000, 0.05);
savings.addInterest();
async function fetchWeather(city) {
    // Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    city,
                    temperature: 24,
                    humidity: 65,
                    description: "Partly cloudy"
                },
                status: 200,
                message: "Success"
            });
        }, 500);
    });
}
async function main() {
    console.log("\n--- Typed Async API Call ---");
    const response = await fetchWeather("Nairobi");
    console.log(`City: ${response.data.city}`);
    console.log(`Temperature: ${response.data.temperature}°C`);
    console.log(`Humidity: ${response.data.humidity}%`);
    console.log(`Conditions: ${response.data.description}`);
    console.log(`API Status: ${response.status}`);
}
main();
