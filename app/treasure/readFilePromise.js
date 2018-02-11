const fs = require('fs')

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(console.log('ok your data is: ', data))
      }
    })
  })
}

module.exports = readFilePromise
