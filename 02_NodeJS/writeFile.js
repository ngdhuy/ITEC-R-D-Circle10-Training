const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200; //goi y du lieu thanh cong
    res.setHeader('Context-Type', 'text/plain')
    fs.writeFile('output.json' , JSON.stringify(data) , {encoding: 'utf8'}, (err) =>{
        if(err) {
            console.log(err);
            res.end(err)
        }else{
            let messenge = "successfully write to file "
            console.log(messenge);
            res.end(messenge);
        }
    })
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})