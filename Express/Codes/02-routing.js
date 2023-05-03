const express = require('express')
const app = express()

app.use(express.json())

const route = '/aadarsh.com'

app.get(route, (req, res)=>{
  res.json({msg: 'Welcome to my home page'})
})


app.get(`${route}/about`, (req, res)=>{
  res.json({msg: 'Welcome to my about page'})
})

app.get(`${route}/contact`, (req, res)=>{
  res.json({msg: 'Welcome to my contact page'})
})

app.get(`${route}/temp`, (req, res)=>{
  res.json({msg: 'Welcome to my temp page'})
})

app.get('*', (req, res)=>{
  res.json({msg: 'No page with given route'})
})

const port = 5000

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})