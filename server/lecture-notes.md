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

**Practice 1: Setting Everything Up**

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
app.use(express.static(path.join(__dirname,"/html")));
```

Assign a port number for the application to listen on. The following code is what creates the server:
```
app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})
```

Now we are ready to check out the app running on our server! 
First run the following command to download all of our dependencies such as Express: 
- `npm install`

Then we should be good to go, run the following command: 
	- `node app.js`

Go to http://localhost:8000/index.html and you will see your homepage.

We will also need to incnclude the following script tags for React and React DOM: 
```
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>
```

To transform JSX code to JavaScript, you'll need babel, a JavaScript compiler. Include babel in the index.html page. JSX is a special kind of javascript code that mimics html. It looks almost exactly like html- so we can write our components directly in our javascript files, to form our components. Later, we will need this JSX to be compiled to a language that our browser understands- javascript. For this there is some setup, but the heavy lifting is done by Babel or other similar libraries. Don't worry too much about JSX or anything React related quite yet- there will be two entire sessions dedicated to React (the frontend); for now we want to make sure we have everything setup correctl on our server.
	
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>























**Practice 2: Interacting with the DOM directly through Javascript**


#### JS Functions


**Bonus**
Complete 'Javascripting' (feel free to skip over the first few challenges) https://github.com/workshopper/javascripting

#### Extra Resources
* https://www.codecademy.com/learn/javascript

