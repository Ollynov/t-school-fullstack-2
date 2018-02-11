// Our first endpoint
```js
app.post('/signup', function (req, res) {

	 console.log('hit, and req.body is: ', JSON.stringify(req.body))
	 res.send('awesome, just signed you up')
})
```
// Be sure to run "npm install" so that the "is-odd" module is installed
```js
var isOdd = require('is-odd');
console.log('is 7 odd? ', isOdd(7))
```
