console.log('utils.js:')

const myName = 'Hello gor'

const add = (a, b) => {
    return a + b
}

// Exporting variables & func at the same time
module.exports = { 
    myName, 
    add
}