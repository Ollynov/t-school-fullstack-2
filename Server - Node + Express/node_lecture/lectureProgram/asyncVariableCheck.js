// asynchronous calls
const fs = require('fs')
const reverseUppercase = require('./utility').reverseUppercase

// const axios = require('axios')
// const request = require('request')

let text = 'some random text'

fs.readFile('./temp.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    text = data
  }
})

console.log(text)

// // Promises
// const readFilePromise = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// readFilePromise('./temp.txt').then(response => {
//   console.log(response)
// })
