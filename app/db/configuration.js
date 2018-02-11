var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:LEXMLDCRXHKWKNKL@sl-us-south-1-portal.10.dblayer.com:24919,sl-us-south-1-portal.11.dblayer.com:24919/admin?ssl=true')

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

var User = mongoose.model('User', userSchema)


module.exports = User