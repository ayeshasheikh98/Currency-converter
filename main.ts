#!/usr/bin/env node

import inquirer from "inquirer";

const currency : any= {
    "USD": 1,
    "EUR": 0.91,
    "GBP": 0.76,
    "INR": 74.57,
    "PKR": 280,
};

let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "'select the currency to convert from:",
        choices: ["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "select the currency convert into:",
        choices: ["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "inter the amount to convert:",
    },

])

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
