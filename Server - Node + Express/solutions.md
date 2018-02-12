// SIGNUP ENDPOINT
```js
app.post('/signup', function (req, res) {

	 console.log('hit, and req.body is: ', JSON.stringify(req.body))
	 res.send('awesome, just signed you up')
})
```
// isODD
// Be sure to run "npm install" so that the "is-odd" module is installed
```js
var isOdd = require('is-odd');
console.log('is 7 odd? ', isOdd(7))
```

// CUSTOM MODULE
```js
// in server/myCustomModule.js
var reverseUppercase = function (string) {
	var reversedString = ''
	for (var i = string.length-1; i >= 0; i--) {
		reversedString += string[i]
	}
	var reversedAndUpper = reversedString.toUpperCase();
	return reversedAndUpper
}

var isEven = function (number) {
  if (number % 2 == 0) {
  	return true
  } else {
  	return false
  }
}

module.exports = {
  reverseUppercase: reverseUppercase,
  isEven: isEven
}

// in app.js
var myModule = require('./server/myCustomModule.js');
console.log('4 is even? ', myModule.isEven(4))
console.log('t-school is awesome reversed is: ', myModule.reverseUppercase('yosh'))
```
