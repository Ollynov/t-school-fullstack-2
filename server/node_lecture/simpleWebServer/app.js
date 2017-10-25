const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 7000
const reverseUppercase = require('./utilities/utilities').reverseUppercase
const addBy5 = require('./utilities/utilities').addBy5

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './static')))

app.post('/api/add5', (req, res) => {
  let number = req.body.number
  let updateNumber = addBy5(number)
  console.log(updateNumber)
  res.json(updateNumber)
})

app.post('/api/reverse', (req, res) => {
})

app.post('/api/book', function (req, res) {
})

app.listen(port)
console.log('express server is up and listening on port ' + port)
