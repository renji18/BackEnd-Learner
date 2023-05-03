// create a folder, create a file in it named bio.txt and data into it. Add more data into the file at the end of the existing data. Read the data without getting the buffer data. rename the file to myboi.txt. then delete both the file and the folder (async)

const fs = require('fs')

// CREATE FOLDER
fs.mkdir('./DemoFolder', (err) => {
  console.log(err);
})

// CREATE WRITE AND APPEND TO FILE IN THE FOLDER
fs.writeFile('./DemoFolder/bio.txt', 'demo demo demo \n', (err) => {
  console.log(err);
})
fs.appendFile('./DemoFolder/bio.txt', 'more more more', (err) => {
  console.log(err);
})

// READ FROM THE FOLDER WITHOUT BUFFER
fs.readFile('./DemoFolder/bio.txt', 'utf-8', (err, data) => {
  console.log(data);
})

// RENAME THE FOLDER
fs.rename('./DemoFolder/bio.txt', './DemoFolder/myboi.txt', (err) => {
  console.log(err);
})

// DELETE THE FILE AND FOLDER
fs.unlink('./DemoFolder/myboi.txt', (err) => {
  console.log(err);
})
fs.rmdir('./DemoFolder', (err) => {
  console.log(err);
})