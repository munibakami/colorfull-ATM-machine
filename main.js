#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //dollar
let myPin = 1234;
//print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`/n /t/t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(` <<<==============>>>  ${chalk.bold.hex('#9999FF')('Welcome to ATM Machine')}<<<========================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`/t/t <<<======================================>>>/n`));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.hex('#99ccFF')("enter your pin:"),
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
