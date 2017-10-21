# The Server - Node with Express

## What you'll learn in this course
- What is a server
- What is node, what are the pros and cons
- How do we set up our own node server

#### Background:


A server is basically just a computer that provides functionality for another computer - the client. Typically the client is what a user interacts with, and a server is behind the scenes. The server is where any logic concerned with data persistence would be found (reading and writing from the database), and is what serves up the client-side code in the first place. Clients and servers have a many to many relationship, meaning that a server can have multiple clients, but a client can also pull in from multiple servers. Also, the client and server can be on the same device (such as when you are developing 'locally' on your laptops), or it can be connected remotely (although there may need to be additional security considerations). 

Javascript is known as a browser-side language, and for good reason; it is the language of the web, and was designed for that purpose, it is executed by the browser. Despite it's immense market share across the web, occasionally some developers would not consider it a "true" programming language, as it was not as robust as Python or Java. Up until about 8 years ago, this may have been true since JS was exclusively for the web. But with the emergence of Node, an opensource Javascript runtime environement that executes on the server side, this all changed. Now you can use the same javascript syntax for server side code.  

Node is built on top of Chrome's V8 engine, which is the same used to execute javascript in the Chrome browser. One of the primary components of Node is that it runs asynchronously. This means it does not have to wait for the termination of a previous process/function to complete, before it continues to execute the code. This makes node incredibly efficient, and one of the only downsides to this asynchronous nature is that writing the code is a little more complicated. 

**Exercise 1: LearnYouNode**

Let's get straight into it. I want everyone to follow along, and install LearnYouNode. There are a lot of different tutorial sites out there, and a ton of videos, but this style of learning I have found to be by far the most efficient. Slightly guided, but gets you writing code within minutes. 
- Follow this link: https://github.com/workshopper/learnyounode
- Run `npm install learnyounode -g` (the -g stands for 'global')
- We will go ahead and complete the first activity together, then move onto the next

## Setting Everything Up

- Navigate to your project directory (confirm with `pwd`)
- "Initiate" your project with `npm init`

Fill in the required details and you should have the package.json file created. It should look something like this:

```
{
  "name": "myReactBlog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Yosh",
  "license": "MIT"
}
```

You'll be using the express framework for serving your application. Install express using the following command (the --save automatically throws express into our package.json for later reference on the dependency):

`npm install express --save`

Express is a framework that abstracts a lot of the work out of setting up a node server. Technically almost all of what we will be doing with express, we can achieve with pure Node, but it would take many more lines of code. Just how bootstrap makes our lives easier on the frontend with design, Express makes things more simple on the server side. 

Using the express framework, let's have our app listen on a port address. Inside the project directory, create a file called `app.js.` Require the express module inside the app.js and create the app! Set the static path of the application where it can find the static files. Here is how it looks:

```
var express = require("express");
var path = require("path");
 
var app = express();
app.use(express.static(path.join(__dirname,"/static")));
```

Assign a port number for the application to listen on. The following code is what creates the server:
```
app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})
```

We are having our app serve up (`app.use`) everything from the 'static' directory so we need to make a new directory 'static' with the command `mkdir`. Then we can move our 'index.html' and 'styles' directory into our new 'static' directory:
- `mkdir static`
- `mv styles static`
- `mv index.html static`


Now we are ready to check out the app running on our server! 
First run the following command to download all of our dependencies such as Express: 
- `npm install`

Then we should be good to go, run the following command: 
	- `node app.js`

Go to http://localhost:8000/index.html and you will see your homepage. Boom! It doesn't look anymore exciting than before, but now an actual server is 'serving' up our html files. Previously we were just observing our site locally because we had the html files on our computer, and the browser can run html. Now we have a server sending over this html, which means that technically we are ready to deploy our app if we want; but we want to actually get it working first, so let's get right to it.


## Endpoints

Server endpoints dictate what the server should do when it gets a particular request to that 'endpoint' which is just a url. Aside from the path/url, there is also an HTTP verb associated to each endpoint. For example, we may want to perform different actions for a 'GET' request to 'www.myapp.com/user' vs. a 'DELETE' request to 'www.myapp.com/user'. 


Let's create an 'endpoint' on the Node.js side to validate the user sign-in process. In the app.js file, create the following:
```
app.post('/signin', function (req, res) {
  
})
```

You'll be making use of the body-parser module to parse the request sent from the React client side. Install the body-parser module in the project. 
 
`npm install body-parser --save`

Require the body-parser module in the app.js file.
  
`var bodyParser = require("body-parser");`

Add the following line of code to enable JSON parsing.
  
`app.use(bodyParser.json());`

These requests that we are referring to are the HTTP requests we learned about at the start of T-School. They are the primary form of communication between the client and server, and each request comes with an "HTTP Verb" that indicates what intention the request has- GET, POST, etc. You have to accomodate for these requests by creating endpoints.

Modify the signin method as shown to validate the user sign-in.

```
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
```

Right now our logic is very hard-coded- it will simply check to see if we have entered 'admin' as both the username and password, and then will send over a success message if that's the case. There's nothing wrong with starting functions with basic logic like this, because it will verify whether we have the first steps going. If we try to build out everything at once, it will be more difficult to figure out what it is that is breaking it. 






