var express = require("express");
var path = require("path");
 
var app = express();
app.use(express.static(path.join(__dirname,"/pages")));



var bodyParser = require("body-parser");

app.use(bodyParser.json());


app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
      res.send('success');
  }
  else{
    res.send('Failure');
  }
})

app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})