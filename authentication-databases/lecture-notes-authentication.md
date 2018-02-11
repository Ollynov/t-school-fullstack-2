 # Authentication
 
Authentication is a fancy word for user sign up and sign in ability on your app. Nearly every robust app has signup/signin features, as it is important to preserve a history for your users. It's important for the user (profiles, preferences, browsing history, etc.), and also important for you as the owner, as you can track valuable information and learn from your users. Authentication is an entire branch of programming, since security is a growing topic, the methods for signing up users and logging them in continues to get more advanced (because so do the hackers). The good news is that 90% of the heavy lifting on the side of security can be achieved through open source (free) frameworks. 

Today we are going to start by implementing about as naive of an authentication system as possible. This is done by design, for a few reasons: 
1. It's not so complex
2. Practical reasons (we are limited by time)
3. To show you how important it is that you give away your password only for trusted websites
4. To give you an appreciation for bcrypt and other solid auth libraries

One of the primary components to proper authentication is to have a proper hashing algorithm in place for your user's passwords. A hashing algorithm is a complex algorithm, secret in design, which will automatically transform a string (the password), into another string of jumbled up characters and numbers. These hashing algorithms are "one way" algorithms, meaning that the same string, let's say "mypassword" will aways generate the same hash, in this case "89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8". However, even if someone was to somehow get access to this hashing algorithm, if they were to input that hash, they would _not_ get back "mypassword." This is why we say that a hash is not an ‘encryption’ – it cannot be decrypted back to the original text (it is a ‘one-way’ cryptographic function, and is a fixed size for any size of source text). 

There are different underlying hashing functions, but SHA256 is the most common right now, and is the underlying hashing algorithm for bitcoin. Here you can play around with an actual SHA256 hashing algorithm: http://www.movable-type.co.uk/scripts/sha256.html


## Setting our app up for authentication + database persistence

First and foremost we need a server that will be running our application. Until now, we have been able to view our html files because our browser is able to execute the html, css, and javascript. However, if we plan on deploying our app, if we plan on serving these 'static' files in the first place, and if we plan on having data persistence and authentication, we need to instantiate our server. This will be a bit of a review from yesterday, and hopefully gives more perspective on how the node server ties into the rest of our app. 

**Exercise 1: Follow along as we set up a server 

- `touch .gitignore`
Go into our new .gitignore file and simply add "node_modules". This is going to tell git to not track any of our node modules. This directory can get very heavy with all of the dependencies, and there is no reason to add them to git, since collaborators can easily pull in all of their own dependencies with an "npm install" command. 

- `touch app.js`
This will be our primary server file. We will spin up the server here, serve our static files (the html, css, and js), and link to other crucial node files. 

- `mkdir static` 
This will be the one place where we include all of the files that we serve directly to the client (html, css, and js)

- `mv styles static`
- `mv index.html static`
- `mv pages static`
- `npm init`
- `npm install express --save`
- `npm install body-parser --save`

Now go ahead and add the following code into your app.js file: 
```javascript
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

 
var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"/static")));

app.post('/signup', function (err, req, res) {
  if (err) {console.log('got an error: ' + err)}
  var email = req.body.email;
  var password = req.body.password;
  if(email == 'admin@gmail.com' && password=='admin'){
      console.log('success');
  }
  else{
    console.log('wrong login credentials!');
  }
})

app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})
```

Finally, go ahead and run `node app.js`. You should get a message in your terminal that we are running on port 8000. Go ahead and visit http://localhost:8000/ and you should see your app! 


**Exercise 1: Create a modal/form for our signup**

We need to add a form for our signup button. Once again for this we can take advantage of bootstrap. To keep a page de-cluttered, one great option is to take advantage of modal windows, which are essentially styled popups. Let's go to the [bootstrap page for modals](https://v4-alpha.getbootstrap.com/components/modal/) and check out the first example they provide. 

Now we can't forget to add `data-toggle="modal" data-target="#signupModal"` to any link or button that we want to actually trigger the modal popup.

Also, go ahead and remove the second submit button.

Now that we have this, there is a container that would serve perfect for a form. Go ahead and add a signup form within the "modal-body" div. Use the following bootstrap form: 

```html
<form>
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
```


## Sending an HTTP request to signup


We are going to use axios, a library that makes it easy to send HTTP requests. Here is the basic format: 
```javascript
axios.post('/signup', {
    params: {
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
 ```
 
This will send a POST request to our '/signup' route. You need also include some sort of params, in this case the email and password. The '.then' and '.catch' are callbacks which we touched upon in the previous lesson in regards to the asynchronous nature of node. 

 
 **Challenge 2**
Get our app to send over a username and password to our backend when we hit the submit button on the signup form. It should console.log of "SUCCESS!!" when we login with the hardcoded 'admin@gmail.com' and 'admin' for password. Be sure to add your javascript code into an external .js file. 

HINT: This challenge has several steps, and it helps to break it down into easier components: 
1. Confirm external js file is connected through a console.log when hitting the submit button
2. You will want to include `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.js"></script>` right above the closing </body> tag of index.html but above our link to our js file, and will want to run `npm install axios --save`
3. When should we trigger this axios.post method?
4. Confirm we can grab the name, username, and password, through a console.log, before we try adding them as params to our post request. Use jQuery here.
5. Confirm whether we are hitting our endpoint at all with a simple console.log 


Awesome!! We have sort of implemented a very naive version of logins. What else can we do to improve our auth? 

- Make all three fields mandatory: name, email, password
- Give some basic restrictions to passwords, more than 5 characters at least
- Hash the passwords
- Make it so that you can't have the same user sign up twice
- Connect it to the database!!


Our app.js file is getting pretty big. In general we want to keep our primary server file small and organized. Let's decouple our code, and move our endpoint logic somewhere else. 

**Exercise: Let's refactor our code**

In general, we want to keep our app.js file clean and organized. That means we don't want to continue adding all of our endpoints there, since in a real app you are going to have many more endpoints than just a couple for authentication. We already are using this line of code to serve our static files: 
`app.use(express.static(path.join(__dirname,"/static")));`

In a similar manner we are going to take advantage of the ".use" method that comes built in with express. Essentially what this does is route all the requests through whatever we pass in- which in this case happens to be `require('./server/endpoints.js')`. Just how we can "require" third party modules, in this case we are requiring our own file. We just need to remember, that if we ever intend on requiring a file, we need to also _export_ that file with "module.exports = router". Follow along as we refactor our code: 

- `mkdir server`
- `touch server/endpoints.js`
- add the following right above your "app.listen" on app.js: 
```
//Routes
app.use(require('./server/endpoints.js'))
```
- add the following three lines of code to the top of your endpoints.js file: 
```
var express = require('express');
var router = express.Router();
var User = require('./../db/configuration.js')
```
- add `module.exports = router` to the bottom of the endpoints.js file

Great, now we are ready to create our endpoints! Here is the skeleton formatting: 
```javascript
router.post('/signup', function (req, res) {

})
```

# Databases

**Let's get our app ready for database integration**

- `mkdir db`
- `touch db/configuration.js`

Add the following to our configuration.js file: 
```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('yay we are conected to our db')
});


module.exports = User
```

We need to replace the mongoose.connect('mongodb://localhost/test') with the url to our database in the cloud. 
 - Log into bluemix and search for "mongo compose"
 - Sign up for the service, and go into "credentials" 
 - Scroll to the bottom and copy the "mongo uri". It should look something like this: (‘mongodb://admin:LEXMLDCRXHKWKNKL@sl-us-south-1-portal.10.dblayer.com:24919,sl-us-south-1-portal.11.dblayer.com:24919/admin?ssl=true')
 - Now go back into our app and replace the url in mongoose.connect
 - add the object `{
  useMongoClient: true
}`
as the second argument to mongoose.connect. It should look like this: 
```javascript
mongoose.connect('mongodb://admin:LEXMLDCRXHKWKNKL@sl-us-south-1-portal.10.dblayer.com:24919,sl-us-south-1-portal.11.dblayer.com:24919/admin?ssl=true', {
  useMongoClient: true
})
```

We are going to be using an ORM called mongoose. An ORM allows you to read and write from the database directly through your code. You would be able to manually write and read from the database from the terminal, and that is the more traditional way of interacting with a database, but we need to have it go through our code. 

- `npm install mongoose --save`
 
Our first step is to create a database schema. The schema is the blueprint for the models that will be saved into our database. It is a series of properties and values. When you create the schema in the first place you simply define the properties and what sort of value you are expecting. There is also an "ObjectId" that is automatically added for each new document in the database. 

There are two primary types of databases- relational and non-relational. A relational database such as MySQL also holds "keys" instead of just plain properties, which point to another table in the database. This allows for less duplication in your database, and can be a good approach for apps that have many items that are tightly related. The upside to a non-relational database such as Mongo is that it is faster and quicker to implement. Also, many startups choose to first go with a non-relational db because they don't yet know all of the models they will need in their app, and a relational db is much harder to later change. 

```javascript
var userSchema = mongoose.Schema({
    name: String, 
    email: String,
    password: String
});
```

Next, we need to create our actual model:
`var User = mongoose.model('User', userSchema);`

and this is the variable that we actually export, because we need to use it in other areas of our app, such as endpoints.js

The next step is to actually save our users in our database (exciting stuff), but first....

Let's run our app (`node app.js`), we should get a console log of "yay we are conected to our db". If so, we are well on our way to saving our users in the database.

Let's navigate back to our endpoints.js file. We should already be hitting out '/signup' endpoint on form submit, and getting some info from our client (email, name, password). What do we do with all that info? It's a two step process: 
- Create a new model
- Save that model to the database

```javascript
  var newUser = new User({
  	name: name,
  	email: email,
  	password: password
  })

  newUser.save(function(err, user) {
  	if (err) return console.error(err);
  	console.log('saved user is ', user)
  })
  ```
  
Did we get the success console log? If so, things look good, but let's confirm by actually observing our database. 
- Go back to bluemix to the service credentials
- Paste the "uri_cli" into your terminal
- It will look something like this mongo --ssl --sslAllowInvalidCertificates sl-us-south-1-portal.10.dblayer.com:25678/admin -u admin -p UTUZBUMSRMYADTVP

Now let's run some terminal database commands: 
- `show databases`
- `use db` (replace db with the actual db name)
- `show collections`
- `db.users.find()` the actual command 

Do you see your user in there?!

## Bonus

Let's hash our passwords to make our app much more secure using bcrypt. 

Add the following to our endpoints.js node file: 
```javascript
var bcrypt = require('bcrypt');
const saltRounds = 10;
```
This is how we hash our password: 
```javascript
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```
The last thing we pass in is a callback, which gives us a "hash". Instead of saving our user with a plain text password, we do the following: 
```javascript
  var newUser = new User({
  	name: name,
  	email: email,
  	password: hash
  })
```

The "salt" is the cherry on top to authentication. It is a string that is added onto your password as a finishing touch (just like salt on a meal). When you hash your password "myDog" with salt, it is more like you are actually hashing "myDog44aslijla9uadf900". So theoretically if someone was somehow able to crack your hashing algorithm, they still wouldn't be able to get into your database if they don't now the salt... extra security is always a good investment. 

**Extra Bonus: Implement Sign In** 

HINT: What you can find as the '/signin' endpoint in the solutions.md file is only the starting point!