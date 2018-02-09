
### BONUS: Network Requests 
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
