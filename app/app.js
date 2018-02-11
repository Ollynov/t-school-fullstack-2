// Pulling in our modules
var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var User = require("./db/configuration.js")

// Invoking our middleware
app.use(express.static(path.join(__dirname,"/static")));
app.use(bodyParser.json());

var myModule = require('./server/myCustomModule.js');
console.log('4 is even? ', myModule.isEven(4))
console.log('yosh reversed is: ', myModule.reverseUppercase('yosh'))


// Our first endpoint
app.post('/signup', function (req, res) {

	 var name = JSON.stringify(req.body).name
	 var email = JSON.stringify(req.body).email
	 var password = JSON.stringify(req.body).password

	 var newUser = new User({
	  	name: name,
	  	email: email,
	  	password: password
	 })

	  newUser.save(function(err, user) {
	  	if (err) return console.error(err);
	  	console.log('saved user is ', user)
	  })
	 res.send('awesome, just signed you up')
})

// Running our server on port 8000
app.listen(8000, function(){
    console.log("Success, node server is running and listening on Port: ", 8000);
})