const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/json')
    
    fs.readFile('data.json','utf-8',(err, data)=>{
        if(err){
            console.log(err)
        } else {
            console.log(data)
            res.end(data)
        }
    })
})

server.listen(port, hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})