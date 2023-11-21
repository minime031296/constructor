function BankAccount(Account_Name, name, type, balance) {
    this.Account_Name = Account_Name;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited rs. ${amount}. New balance: rs. ${this.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn rs. ${amount}. New balance: rs. ${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
    }
};

BankAccount.prototype.checkBalance = function () {
    console.log(`Account balance: rs. ${this.balance}`);
};

BankAccount.prototype.isActive = function () {
    return this.active;
};

function totalbalance(accounts) {
    let total_bal = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            total_bal += account.balance;
        }
    }
    return total_bal;
}

let account1 = new BankAccount("[1]", "abc", "checking", 1000);
let account2 = new BankAccount("[2]", "pqr", "saving", 500);

account1.deposit(20);
account1.checkBalance();

account2.withdraw(10);
account2.checkBalance();

console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
console.log(`${account2.name}'s account is active: ${account2.isActive()}`);

let accounts = [account1, account2];
let totalBalance = totalbalance(accounts);
console.log(`Total balance of all active accounts: rs. ${totalBalance}`);
