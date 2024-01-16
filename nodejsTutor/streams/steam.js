
const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // 1st way
    // fs.readFile('streamTut.txt', 'utf-8', (err, data) => {
    //     if(err) console.log(err)
    //     res.end(data)
    // })
    // 2nd way streaming
    const rstream = fs.createReadStream('streamTut.txt')
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on('end', () => {
        res.end()
    })
    rstream.on('error', (err) => {
        console.log(err)
        res.end('file not found')
    })
})

server.listen(8000, () => {
    console.log('listening port at 8000')
})