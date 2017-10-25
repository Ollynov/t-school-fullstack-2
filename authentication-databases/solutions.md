endpoints.js
```javascript
var express = require('express');
var router = express.Router();
var User = require('./../db/configuration.js')


router.post('/signin', function (req, res) {
  var email=req.body.params.email;
  var password=req.body.params.password;

  User.findOne({ email: email }, function(err, user) {
    if (err) {console.log('we didnt find this user')};
    console.log('ok we found: ', user)
    if (user) {
      if (user.password === password) {
        console.log('ok lets sign you in')
        req.session.authenticated = true;
        if (req.session.views) {
          req.session.views++;
        } else {
          req.session.views = 1
        }
      } else {
        console.log('sorry your password didnt match');
      }
    }
  });
})



router.post('/signup', function (req, res) {
  var email=req.body.params.email;
  var password=req.body.params.password;
  var name=req.body.params.name;
  console.log('hitting endpoint req is ', req)
  var newUser = new User({
  	name: name,
  	email: email,
  	password: password
  })

  newUser.save(function(err, user) {
  	if (err) return console.error(err);
  	console.log('saved user is ', user)
  })
})

module.exports = router
```


configuration.js
```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('yay we are conected to our db')
});

var userSchema = mongoose.Schema({
    name: String, 
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User
```
