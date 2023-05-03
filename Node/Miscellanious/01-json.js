const bioData = {
  name: 'binod',
  age: 25,
}

const jsonData = JSON.stringify(bioData)
console.log(jsonData);

const parseJson = JSON.parse(jsonData)
console.log(parseJson);