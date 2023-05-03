const express = require('express')
const app = express()
require('./db/connection')
const Student = require('./models/students')


app.use(express.json())

// CREATE NEW STUDENT
app.post('/students', (req, res) => {
  const document = new Student(req.body)
  document.save().then(()=>{
    res.status(200).send(document)
  }).catch((e)=>{
    res.status(404).send(e);
  })
})


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})  