var express = require('express')
var app = express()

app.get('/test',(req, res) => {
    res.end('<h1>Testing</h1>')
})

