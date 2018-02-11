
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
- Hash the passwords (for much later lesson)
- Connect it to the database!!
- Make it so that you can't have the same user sign up twice



### Network Requests 
- How does the client and backend communicate?
- What is a network request? 
- What is HTTP?
- Can we make this communication between client and server faster? 

In the most basic explanation, network request are the way that servers (computers) communicate. One server 'requests' some sort of information from another server, and that other server can choose whether to send back that information or not. The request can be for login credentials, for an html page, or for some unique information such as weather information. It is unique that we are already bringing up network requests now, because they certainly are not the most basic thing when it comes to programming. However, when you hit enter after typing in 'www.google.com' you are sending a network request, and that's the only way that we get back our webpage. In many ways, I see it as the first step to fullstack. 

By far the most common form of web communication is through the HTTP protocol. Back in the 80s and early 90s everyone knew that there had to be a more unified way for the web to work. There is actually an organization that leads the standards developed for the world wide web, called W3C, founded and still led by Tim Berners-Lee. They established the first version of HTTP, and it was first used in production in 1997, and still used today. 

A typical HTTP request has the following components:
- A verb that indicates what sort of request it is. GET, POST, PUT, and DELETE are the most common. 
- Headers. Accept, Content-Type, and Date are some of the most common ones. These can be viewed as the standard config parameters. 
- Body. This is data unique to the request. For example, if we send a request to login, we need to include the username and password in the body. 

Exercise: 
- Check out this site: https://www.hurl.it/

 

Advanced: 
- look into GraphQL http://graphql.org/learn/
- Check out websockets: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
- [Socket.io](https://socket.io/) (easiest framework to implement socket technology)

*> Let's Try it!: Let’s try it! Let’s make a request to the weather API!* 

HINT: There are websites that give you demo environments to send out API calls to other servers.

Advanced: 
- Get back the current hurricane info from around the world
- Write the same request from postman
- Write the same request from the terminal (using curl)
- What other responses can you get? Reddit, Spotify, and Google Places are some ideas.
