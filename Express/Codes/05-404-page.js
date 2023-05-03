const express = require('express')
const app = express()
const port = 5000


app.set('view engine', 'hbs')


app.get('/', (req, res)=>{
  res.render('index', {
    Subscribe: "Aadarsh"
  })
})

app.get('/about', (req, res)=>{
  res.render('about', {
    youkoso: "Welcome to about"
  })
})

app.get('/about/*', (req, res)=>{
  res.render('404', {
    ERROR: "Opps! This about page couldn't be found"
  })
})

app.get('*', (req, res)=>{
  res.render('404', {
    ERROR: "Opps! Page couldn't be found"
  })
})



app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})