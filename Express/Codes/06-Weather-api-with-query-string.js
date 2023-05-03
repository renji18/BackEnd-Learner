const express = require('express')
const requests = require('requests')
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Weather app api usage')
})

app.get('/about', (req, res) => {
  requests(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${req.query.name}?unitGroup=metric&key=6PGDMU6LY3ZBGHBBL44SSBZMG&contentType=json`)
    .on('data', (chunk) => {
      const objData = JSON.parse(chunk)
      console.log(`City is ${objData.resolvedAddress} and temp is ${objData.currentConditions.temp}`)
      res.send(req.query.name)
    })
    .on('end', (err) => {
      if (err)
        return console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})