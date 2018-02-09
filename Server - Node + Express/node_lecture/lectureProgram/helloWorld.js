const moment = require('moment')
let greetings = 'hello world node!'
// let now = new Date()
let now = moment()
let display = now.format('dddd, MMMM Do YYYY, h:mm:ss a')
console.log(greetings)
console.log(display)
