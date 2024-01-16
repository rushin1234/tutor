const fs = require('fs')
const http = require('http')
const path = require('path')

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '../Userapi/userapi.json'), 'utf-8')

    if(req.url == '/') {
        res.end("Home")
    } else if(req.url == '/about') {
        res.end('about')
    } else if (req.url == '/userapi') {
        res.end(data)
    }
})

server.listen(8000, () => {
    console.log("listening at 8000")
})