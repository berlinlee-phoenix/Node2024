// const fs = require('fs')

// filePath = 'notes.txt'
// Synchronously
// Writing text to 'notes.txt'
//fs.writeFileSync(filePath, 'This file was created by Node.js')
// fs.writeFileSync(filePath, 'My name is Andrew.')

// fs.appendFileSync(filePath, ' I live in Philadelphia.')
// fs.appendFileSync(filePath, '\nThis is a new line ;)')

// import runs first
// Destructuring variables & callback func from ./utils.js
const { myName, add } = require('./utils.js')
// Destructuring the only callback fun in ./notes.js
const { getNotes } = require('./notes.js')

const sum = add(1,10)
console.log(`name: ${myName}`)
console.log(`\n`)
console.log(`sum: ${sum}`)
console.log(`\n`)

const msg = getNotes()
console.log(`msg: ${msg}`)