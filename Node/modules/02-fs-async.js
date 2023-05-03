const fs = require('fs')

fs.writeFile('demo.txt', 'demo demo demo \n', (err) => {
  console.log(err);
})

fs.appendFile('demo.txt', 'more more more', (err) => {
  console.log(err);
})

fs.readFile('demo.txt', 'utf8', (err, data) => {
  console.log(data);
})