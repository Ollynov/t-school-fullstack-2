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
    $('.modal').modal('toggle')
    if (user) {
      if (user.password === password) {
        console.log('ok lets sign you in')
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
  console.log('hitting endpoint req.body is ', req.body)
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
mongoose.connect("mongodb://admin:UTUZBUMSRMYADTVP@sl-us-south-1-portal.10.dblayer.com:25678,sl-us-south-1-portal.9.dblayer.com:25678/admin?ssl=true", {
  useMongoClient: true
})

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

script.js
```javascript

$( document ).ready(function() {
    $('#signInForm').submit(function(e) {
      e.preventDefault();
      var email = $('#emailInput').val()
      var pw = $('#passwordInput').val()

      axios.post('/signin', {
        params: {
          email: email, 
          password: pw
        }
      })
      .then(function (response) {
        console.log('YUP: ', response);
      })
      .catch(function (error) {
        console.log('NO: ', error);
      });
    })

    $('#signUpForm').submit(function(e) {
      e.preventDefault();
      var email = $('#emailInputSignUp').val()
      var pw = $('#passwordInputSignUp').val()
      var name = $('#nameInputSignUp').val()
      console.log('at least running signup with: ', email, pw, name)
      $('.modal').modal('toggle')
      axios.post('/signup', {
        params: {
          email: email, 
          password: pw,
          name: name
        }
      })
      .then(function (response) {
        console.log('YUP: ', response);
      })
      .catch(function (error) {
        console.log('NO: ', error);
      });
    })
});
```

The modal and form in index.html
```html
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Signup</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="signUpForm">
              <div class="form-group">
                <label for="nameInputSignUp">Name</label>
                <input type="text" class="form-control" id="nameInputSignUp">
              </div>
              <div class="form-group">
                <label for="emailInputSignUp">Email address</label>
                <input type="email" class="form-control" id="emailInputSignUp" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="passwordInputSignUp">Password</label>
                <input type="password" class="form-control" id="passwordInputSignUp">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
```
