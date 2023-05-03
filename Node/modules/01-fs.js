const fs = require('fs')

fs.writeFileSync('read.txt', 'demo text again \n')
fs.appendFileSync('read.txt', 'demo text again and again')

console.log(fs.readFileSync('./read.txt', 'utf8'))

fs.renameSync('./read.txt', 'readWrite.txt')