
const EventEmitter = require('events')
const event = new EventEmitter()

event.on('sayMyName', (name) => {
    console.log(`My name is ${name}`)
})

event.emit('sayMyName', 'ram')