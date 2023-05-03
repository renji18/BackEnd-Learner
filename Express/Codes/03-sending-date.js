const express = require('express')
const app = express()

app.use(express.json())

app.use('/', express.static('./Static'))

app.get('/about', (req, res)=>{
  res.json({msg: 'about page'})
  res.send()
})


const port = 5000

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})