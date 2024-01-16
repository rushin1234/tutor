
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates/views'))
hbs.registerPartials(path.join(__dirname, 'templates/partials'))
// app.use(express.static(ath.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {
        root: 'rootoot'
    })
})

app.get('/about', (req, res) => {
    res.send("Welcome to about page")
})

app.get('*', (req, res) => {
    res.send('<h1>404</h1>')
})

app.listen(8000, () => {
    console.log('listening at port 8000')
})

//partials are like react components