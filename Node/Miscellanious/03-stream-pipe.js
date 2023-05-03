const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  const rstream = fs.createReadStream('./demo.txt', 'utf-8')
  rstream.pipe(res)
})

const port = 5000

server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})