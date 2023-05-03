const express = require('express')
const app = express()

app.use(express.json())

// to set view engine
app.set('view engine', 'hbs')


//template engine route
app.get('/', (req, res)=>{
  res.render('index', {
    Subscribe: "Renji"
  })
})

app.get('/about', (req, res)=>{
  res.render('about', {
    youkoso: "welcome"
  })
})

const port = 5000


app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})