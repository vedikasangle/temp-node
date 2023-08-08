const path = require('path')

//path seperator
console.log(path.sep)

//path join 
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
//to get basename
const base = path.basename(filePath)
console.log(base)

//returns absolute path 
const absolute = path.resolve(__dirname, 'content' , 'subfolder', 'test.txt')
console.log(absolute)

