#! /usr/bin/env node
import { confirm, input, select } from "@inquirer/prompts";
import chalk from "chalk";
console.log(chalk.greenBright("\nWelcome To Typescript Quiz\n"));
const name = await input({
    message: chalk.gray("Enter Your Name")
});
const confirmation = await confirm({
    message: chalk.gray("Do you want to start the quiz?")
});
// console.log("\n");
if (confirmation === true) {
    let score = 0;
    const q1 = await select({
        message: "Q1: Which of the following is the correct file extension for a Typescript file?",
        choices: [
            { name: ".js", value: ".js" },
            { name: ".tsx", value: ".tsx" },
            { name: ".ts", value: ".ts" },
            { name: ".json", value: ".json" },
        ]
    });
    console.log("\n");
    const q2 = await select({
        message: "Q2: Which keyword is used to define a constant variable in typescript?",
        choices: [
            { name: "var", value: "var" },
            { name: "const", value: "const" },
            { name: "let", value: "let" },
            { name: "constant", value: "constant" },
        ]
    });
    console.log("\n");
    const q3 = await select({
        message: "Q3: What is the correct way to define an optional parameter in function?",
        choices: [
            { name: "property ?: type", value: "property ?: type" },
            { name: "property : type", value: "property : type" },
            { name: "property : type?", value: "property : type?" },
            { name: "property !: type", value: "property !: type" },
        ]
    });
    console.log("\n");
    const q4 = await select({
        message: "Q4: What is the primary purpose of interfaces in Typescript?",
        choices: [
            { name: "To define class properties", value: "To define class properties" },
            { name: "To inititialize a variable", value: "To inititialize a variable" },
            { name: "into perform inheritance", value: "into perform inheritance" },
            { name: "To enforce structure on objects", value: "To enforce structure on objects" },
        ]
    });
    console.log("\n");
    const q5 = await select({
        message: "Q5: What is the purpose of classes in typescript?",
        choices: [
            { name: "To make a object", value: "To make a object" },
            { name: "To make a blueprint of object", value: "To make a blueprint of object" },
            { name: "To define the structure of array", value: "To define the structure of array" },
            { name: "None of these", value: "None of these" },
        ]
    });
    if (q1 === ".ts") {
        console.log("1. Correct Answer");
        score += 2;
    }
    else {
        console.log("1. Incorrect Answer!");
    }
    if (q2 === "const") {
        console.log("2. Correct Answer");
        score += 2;
    }
    else {
        console.log("2. Incorrect Answer!");
    }
    if (q3 === "property ?: type") {
        console.log("3. Correct Answer");
        score += 2;
    }
    else {
        console.log("3. Incorrect Answer!");
    }
    if (q4 === "To enforce structure on objects") {
        console.log("4. Correct Answer");
        score += 2;
    }
    else {
        console.log("4. Incorrect Answer!");
    }
    if (q5 === "To make a blueprint of object") {
        console.log("5. Correct Answer");
        score += 2;
    }
    else {
        console.log("5. Incorrect Answer!");
    }
    console.log(`${name}, Your Score is: ${score}`);
}
else {
    console.log("It's Your Choice!");
}
