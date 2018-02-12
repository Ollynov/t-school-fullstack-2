const fs = require('fs')

fs.readFile('./temp.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// console.log(text)

// // Promises
// const readFilePromise = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data.toString())
//       }
//     })
//   })
// }

// readFilePromise('./temp.txt').then(response => {
//   console.log(response)
// })
