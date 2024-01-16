
const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('streamTut.txt')
    rstream.pipe(res)
})

server.listen(8000, () => {
    console.log('listening port at 8000')
})