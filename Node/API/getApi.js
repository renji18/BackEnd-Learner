const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  const directory = `${__dirname}/API/apiData.json`
  const data = fs.readFileSync(directory, 'utf-8')
  const newData = JSON.parse(data)

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
      res.writeHead(200, {"Content-type": "application/json"})
        res.end(newData[2].title)
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