#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "enter any first number", type: "number", name: "firstnumber" },
    { message: "enter any second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("please select valid operator");
}
