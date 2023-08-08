//commonJS, every file is module(by default )
//modules - encapsulated code(only share minimum)

const names = require('./names')
const sayHi = require('./utils')

// console.log(sayHi)

sayHi('susan') 
sayHi(names.john)
sayHi(names.peter)