// const fs = require('fs')

// filePath = 'notes.txt'
// Synchronously
// Writing text to 'notes.txt'
//fs.writeFileSync(filePath, 'This file was created by Node.js')
// fs.writeFileSync(filePath, 'My name is Andrew.')

// fs.appendFileSync(filePath, ' I live in Philadelphia.')
// fs.appendFileSync(filePath, '\nThis is a new line ;)')

// Self-declared modules run first
// Destructuring variables & callback func from ./utils.js
const { myName, add } = require('./utils.js')
// Destructuring the only callback fun in ./notes.js
const { getNotes } = require('./notes.js')

// 3rd party modules run later
// importing 3rd party modules
const validator = require('validator')

const sum = add(1,10)
console.log(`name: ${myName}`)
console.log(`\n`)
console.log(`sum: ${sum}`)

console.log(`\n`)
const msg = getNotes()
console.log(`msg: ${msg}`)

const email = 'test@test.com';
console.log(`email: ${email}`)

console.log(`\n`)
console.log(`validator.isEmail(email):\n${validator.isEmail(email)}`)

console.log(`\n`)
const myUrl = 'https://google.com.hk'

console.log(`validator.isURL(myUrl):\n${validator.isURL(myUrl)}`);

