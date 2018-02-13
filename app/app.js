// Pulling in our modules
var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Invoking our middleware
app.use(express.static(path.join(__dirname,"/static")));
app.use(bodyParser.json());

var myModule = require('./server/myCustomModule.js');
console.log('4 is even? ', myModule.isEven(4))
console.log('yosh reversed is: ', myModule.reverseUppercase('yosh'))


// Our first endpoint
app.post('/signup', function (req, res) {

	 console.log('HIT, and req.body is: ', JSON.stringify(req.body))
	 res.send('awesome, just signed you up')
})

// Running our server on port 8000
app.listen(8000, function(){
    console.log("Success, node server is running and listening on Port: ", 8000);
})