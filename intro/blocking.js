// Blocking
const getUserSync = require('./src/getUserSync')

const userOne = getUserSync(1)
console.log(`userOne: ${userOne}`)

const userTwo = getUserSync(2)
console.log(`userTwo: ${userTwo}`)

const sum = 1 + 33
console.log(`sum: ${sum}`)