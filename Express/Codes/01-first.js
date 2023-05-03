const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
  res.json({msg: 'express is running'})
})

app.get('/about', (req, res)=>{
  res.json({msg: 'About me, what will you do after knowing about me?'})
})



const port = 5000

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})