const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  // fs.readFile('./demo.txt', 'utf-8', (err, data) => {
  //   if(err) return console.log(err);
  //   res.end(data.toString())
  // })
  const rstream = fs.createReadStream('./demo.txt', 'utf-8')
  rstream.on('data', (chunkdata) => {
    res.write(chunkdata)
  })
  rstream.on('end', () => {
    res.end()
  })
  rstream.on('error', (err) => {
    res.end('file not found')
  })
})

const port = 5000

server.listen(port, () =>{
  console.log(`server is listening on port ${port}...`);
})