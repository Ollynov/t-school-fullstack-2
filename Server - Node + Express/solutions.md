// Our first endpoint
app.post('/signup', function (req, res) {

	 console.log('hit, and req.body is: ', JSON.stringify(req.body))
	 res.send('awesome, just signed you up')
})
