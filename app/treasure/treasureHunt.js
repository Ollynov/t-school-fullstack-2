var readFilePromise = require('./readFilePromise')
var fs = require('fs')
var decrypt = require('./../server/myCustomModule.js').reverseUppercase

readFilePromise('treasure.txt')
console.log(decrypt('taH eht ni taC ehT'))
