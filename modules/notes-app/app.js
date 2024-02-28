// const fs = require('fs')

// filePath = 'notes.txt'
// Synchronously
// Writing text to 'notes.txt'
//fs.writeFileSync(filePath, 'This file was created by Node.js')
// fs.writeFileSync(filePath, 'My name is Andrew.')

// fs.appendFileSync(filePath, ' I live in Philadelphia.')
// fs.appendFileSync(filePath, '\nThis is a new line ;)')

// ===================================================

// Self-declared modules run first
// Destructuring variables & callback func from ./utils.js
const { myName, add } = require('./utils.js');
// Destructuring the only callback fun in ./notes.js
const { getNotes } = require('./notes.js');

// 3rd party modules run later
// importing 3rd party modules
const validator = require('validator');
//const chalk = require('chalk');
const chalk = require('chalk');

const sum = add(1,10);
console.log(`name: ${myName}`);
console.log(`\n`);
console.log(`sum: ${sum}`);

console.log(`\n`);
const msg = getNotes();
console.log(`msg: ${msg}`);

const email = 'test@test.com';
console.log(`email: ${email}`);

console.log(`\n`);
console.log(`validator.isEmail(email):\n${validator.isEmail(email)}`);

console.log(`\n`);
const myUrl = 'https://google.com.hk';

console.log(`validator.isURL(myUrl):\n${validator.isURL(myUrl)}`);

console.log(`\n`)
console.log(`chalk.whiteBright.bgCyan.bold('Success'):\n${chalk.whiteBright.bgCyan.bold('Success')}`);
console.log(`chalk.hex('#00FFFF').bgWhite.bold('Success'):\n${chalk.hex('#FFFFFF').bgWhite.bold('Success')}`);

// Dynamic inputs
// nodemon app.js HelloGor
console.log(`process.argv:\n${process.argv}`)
console.log(`\n`)

console.log(`process.argv[2]:\n${process.argv[2]}`)

console.log(`\n`)
const command = process.argv[2]

// If command input === 'add' or 'ADD'
if (command.toLowerCase() === 'add') {
    console.log(`${chalk.green("command.toLowerCase() === 'add'")}:\n${chalk.green(command)}`)
} else if (command.toLowerCase() === 'remove') {
    console.log(`${chalk.green("command.toLowerCase() === 'remove'")}:\n${chalk.green(command)}`)  
} else {
    console.log(`${chalk.red("command.toLowerCase() !== 'add/remove'")}:\n${chalk.white.bgRed(command)}`)
}

