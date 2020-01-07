const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/json')
    
    let data = [1, 2, {"name": "Mr Bưởi"} ]

    fs.writeFile('output.json', JSON.stringify(data), {encoding: 'utf-8'},(err)=>{
       if(err){
           console.log(err)
       } else {
           console.log("Success")
       }
    })
})

server.listen(port, hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})