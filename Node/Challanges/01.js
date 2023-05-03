// create a folder, create a file in it named bio.txt and data into it. Add more data into the file at the end of the existing data. Read the data without getting the buffer data. rename the file to myboi.txt. then delete both the file and the folder (synchronously)

const fs = require('fs')

// CREATE FOLDER
fs.mkdirSync('DemoFolder')

// CREATE, WRITE AND APPEND TO A FILE IN THE NEWLY CREATED DIRECTORY
fs.writeFileSync('./DemoFolder/bio.txt', 'demo data \n')
fs.appendFileSync('./DemoFolder/bio.txt', 'more data bro')

// LOG THE DATA IN THE FILE WITHOUT THE BUFFER
console.log(fs.readFileSync('./DemoFolder/bio.txt', 'utf8'))

// RENAME THE FILE
fs.renameSync('myboi.txt', './DemoFolder/myboi.txt')

// REMOVE THE FILES
fs.unlinkSync('./DemoFolder/bio.txt')
fs.unlinkSync('./DemoFolder/myboi.txt')

// REMOVE THE FOLDER
fs.rmdirSync('./DemoFolder')