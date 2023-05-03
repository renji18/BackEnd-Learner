// convert to json, store in a file, read from the file, convert back to js object, log

const fs = require('fs')

const bioData = {
  name: 'binod',
  age: 25,
}

// WRITE
// fs.writeFile('./demo.json', JSON.stringify(bioData), (err)=>{
  // console.log('done');
// })

// READ
fs.readFile('./demo.json', 'utf8', (err, data)=>{
  console.log(data);

  //REVERT BACK
  const parsedData = JSON.parse(data)

  // SHOW DATA
  console.log(parsedData);
});

