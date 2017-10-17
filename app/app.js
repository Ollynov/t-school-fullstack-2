var express = require("express");
var path = require("path");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
 
var app = express();
app.use(express.static(path.join(__dirname,"/static")));



var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


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