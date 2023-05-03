const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  try {
    if(req.url === '/'){
      res.end(`Hello from the other side`)
    }
    else if(req.url === '/contact'){
      res.end('Contact us')
    }
    else if(req.url === '/about'){
      res.end('About us')
    }
    else if(req.url === '/userapi'){
      const directory = `${__dirname}/API/apiData.json`
      fs.readFile(directory, 'utf-8', (err, data) => {
        res.end(data)
      })
    }
    else{
      res.end('<h1>No url matching the params</h1>')
    }
  } catch (error) {
    console.log(error);
  }
  
})

const port = 5000
const ip = '127.0.0.1'

server.listen(port, ip, ()=>{
  console.log(`Server is listening on port ${port} and ip ${ip}`);
})