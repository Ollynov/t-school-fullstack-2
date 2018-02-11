# The Server - Node with Express


## What you'll learn in this course

- What is a server
- What is node
- What is "asynchronous"
- How do we set up our own node server
- What is an "endpoint"
- How do we respond to a request from 

#### Background:

A server is basically just a computer that provides functionality for another computer - the client. Typically the client is what a user interacts with, and a server is behind the scenes. The server is where any logic concerned with data persistence would be found (reading and writing from the database), and is what serves up the client-side code in the first place. Clients and servers have a many-to-many relationship, meaning that a server can have multiple clients, but a client can also pull in information from multiple servers. Also, the client and server can be on the same device (such as when you are developing 'locally' on your laptops), or it can be connected remotely (although there may need to be additional security considerations). 

Javascript is known as a browser-side language, and for good reason; it is the language of the web, and was designed for that purpose, it is executed by the browser. Despite it's immense market share across the web, occasionally some developers would not consider it a "true" programming language, as it was not as robust as Python or Java. Up until about 8 years ago, this may have been true since JS was exclusively for the web. But with the emergence of Node, an opensource Javascript runtime environement that executes on the server side, this all changed. Now you can use the same javascript syntax for server side code.  

Node is built on top of Chrome's V8 engine, which is the same used to execute javascript in the Chrome browser. One of the primary components of Node is that it runs asynchronously. This means it does not have to wait for the termination of a previous process/function to complete, before it continues to execute the code. This makes node incredibly efficient, and one of the only downsides to this asynchronous nature is that writing the code is a little more complicated. 

**Exercise 1 - Follow along as we convert our app**

Up until now we have been working on a static site that consists of nothing more than html, css, and javascript. It has been fairly simple and has worked well up until this point, but now that we need some advanced functionality such as the ability to signup users, we need some data persistence, and therefore need to set up a server. Also, it's important to note that we have also been simply opening up our html files with the browser. This works since the browser knows how to open and read html (just how Microsoft Word can pop open a word file). However, if we are planning on eventually deploying our app, we need to get a server running, which will actively _receive_ incoming requests from clients around the world, and _send_ back our static app files. 

- First let's add a primary server file `touch app.js`
- Paste the following inside: 

```js
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
    console.log("Success, node server is running and listening on Port: ", 8000);
})

```
NOTE: If we were to try and run `node app.js` right now we would get an error that it doesn't know what "express" is. We have not "required" it yet. As our app builds, we are not going to only need one or two of these modules, but hundreds or thousands of them (many of our modules have their own dependencies that they need as well). In order to stay sane, and keep everything organized, these are all bundled into a folder called "node modules". We can manage our node modules with a library and command line tool called "NPM"

- run `npm init` from within the app directory (this creates a package.json file which dictates what modules/dependencies your app needs to be able to run)
- run `npm install --save express` (you can also just use -s instead of --save)

This installed 'express' into our project directory so that we can use it. The `--save` portion added this "dependency" to our package.json 

You'll be using the express framework for serving your application. Express is a framework that abstracts a lot of the work out of setting up a node server. Technically almost all of what we will be doing with express, we can achieve with pure Node, but it would take many more lines of code. Just how bootstrap makes our lives easier on the frontend with design, Express makes things more simple on the server side. 

- run `npm install --save path`
- run `node app.js`

At this point node should be able to execute the file and start the server (check to see if you get your success message in your terminal), but something still isn't right, if we navigate to http://localhost:8000/ we will probably see an error message. What is wrong? 

- `mkdir static`
- `mv about.html static`, `mv styles static`, etc. (move all html, css, and javascript into this directory)
- `touch .gitignore` 

Open up this .gitignore file and simply add "node_modules". This assures that the node_modules folder will not be added to github (git will completely ignore it). It is very large and there's no reason to put it up there, because anyone who pulls down our code base can run "npm install" which will go through the package.json file and install all of the dependencies needed. 


**Exercise 2 - Let's respond to a client request**

We left the signup unfinished. It should be sending a request, but who knows if it's working correctly?? After all... when it comes to coding, things usually never work the first time around. Anyways, the first step in correctly communicating between client and server is to set up an endpoint and see whether we are correctly hitting that endpoint in the first place. 

On your own try to verify with a console log that you are hitting your server when signing up. You should also check whether the correct content is being sent (name, email, password). 

HINT: the body-parser middleware automatically puts our important stuff onto the "body" property of our incoming request object.

BONUS: Try to also send a response back to the client (you can then verify whether you got something back on the client side with a console.log but remember, it will appear on the browser rather than the terminal)

### Modules

Right now all of our server logic is in one file. One of the strengths of Node is that you can not only break up your own logic into multiple files (for organization), but you can easily pull in abilities from other external, 3rd party modules. In fact, with express, body-parser, and path, that's exactly what we're doing, we are "requiring" these modules, after installing them with npm. 


##### Exercise 3: Load an easy to use node module from NPM (10min)
Let's start with an absurdly simple node module, just to illustrate the concept. Go ahead and do this activity straight inside of app.js.

I recommend this one to start
https://www.npmjs.com/package/is-odd

BONUS:
Get this module working instead
https://www.npmjs.com/package/math-expression-evaluator


##### Exercise 4: Write your own module and import it in your main app *** (20 min)
Write a module that has two abilities, the first is a function "is-even" which will simply return true, if the number passed to it is an even number. The second ability of our custom node module will be to take a string, and return that string reversed and in all upper case. 

You can confirm whether you module is working by invoking the functions on app.js in a console log. 

Before we begin, to get started let's add the necessary files: 
- `mkdir server`
- `touch server/myCustomModule.js`

At the bottom of myCustomModule.js add the following: 
```js
module.exports = {
  reverseUppercase: reverseUppercase,
  isEven: isEven
}
```

Any time you create a custom module that you plan to use elsewhere (such as in app.js), you need to be sure to export it. Here we are exporting an object that holds both of our functions. You still need to write the functions and use them inside of app.js


##### Lecture 2: Asynchronous Node programming (15 min)
Introduction to asynchronous javascript by looking at the FS module of node, understand the common patterns of callback functions 
Introduction to another asynchronous pattern called promises 

##### Exercise 2: Treasure Hunt (25 min)
go to the treasure hunt folder and edit the treasureHunt.js file, start with clue1.txt, can you get to the treasure?


exercise: write an API for counting the number of times a word appears in the text of "Romeo and Juliet". Text file provided. 
Add this functionality somewhere in your blog

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



