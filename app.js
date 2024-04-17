#! /usr/bin/env node  
//shebang
import inquirer from "inquirer";
import chalk from "chalk"; // for colouring add
console.log(chalk.rgb(0, 255, 0).underline `WORDS COUNTING PROGRAM`);
//for name user
const name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.red("what is your name?")
    }
]);
console.log(`welcome,${chalk.blue(name.name)}: to our  BATMAN counting words program`);
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.red("Enter your sentence to count the word:")
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(chalk.green(`Your words of counting is: ${word.length}`));
