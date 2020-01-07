const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    
    let data = [1, 2, { "name": "Mr Bưởi"}]

    fs.writeFile( 'output.json', JSON.stringify(data), {encoding: 'utf8'}, (err)=>{
        if(err) {
            console.log(err)
            res.end(err)
        } else {
            let message = "Successfully written to File"
            console.log(message)
            res.end(message)
        }
    })
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})