import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let myPin = 1155;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin number");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select one operation",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log("operationAns");
if ("operationAns.operation === withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter your amount"
        }
    ]);
    console.log("amountAnswer.amount");
    myBalance -= (amountAns.amount);
    console.log("your remaining balance is:" + myBalance);
}
else {
    console.log("Incorrect pin number");
}
;
