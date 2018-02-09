// Pulling in our modules
var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Invoking our middleware
app.use(express.static(path.join(__dirname,"/static")));
app.use(bodyParser.json());


// Our first endpoint
app.post('/signin', function (req, res) {

})

// Running our server on port 8000
app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})