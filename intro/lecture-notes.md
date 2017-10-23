<img src="https://www.research.ibm.com/university/cas/benelux/images/eye-bee-m.gif" >

# TIME FOR SOME FULLSTACK PROGRAMMING

The goal of this first session is to get to know each other, provide some context on what we will be building, and to see if there are certain holes in our understanding of fullstack. We will structure the course about 30% lecture, and 70% hacking, because we are firm believers that the best way to learn, is by doing. Also- in case you are solid in certain portions of the stack, yet weak on others, you can be sure to put extra emphasis on those. The assumption is that you already know the fundamentals of programming, and html, so we can quickly move onwards to the interesting stuff!!

## What you will learn in this first section
* What is fullstack?
* Use basic commands of the Terminal
* What a network request is
* What a network request protocol is
* The basics of what happens when you input 'google.com' and hit enter in your browser


### Our Project
We are going to be building a fullstack app, with extra emphasis on the portions that can be duplicated for any web app (authentication, responsive design, etc.). We will move rapidly, but will be covering more or less everything that constitutes a one-page CRUD app. This stands for 'CREATE, READ, UPDATE, DELETE' - essentially we want our app to have database persistence, and functionality to update portions of the page as we navigate, perform actions, etc. If you can get comfortable implementing the most crucial components, you can always replace with different technologies, different APIs, different styles, etc. for the future app of your choice. We want you to get creative both during the course, and afterwards when you go home, and have this app to play around with.

We will be building a simple blog, but feel free to build whatever app you would like. We ask that you follow along in the first two days where we will cover basics that should apply to any app- server setup, responsive navbar, database integration, authentication, etc. but feel free to get creative, especially during the hacking sessions!

### Some Course Themes
Some good rules of thumbs to remember during the class are:

**Google when you don't know**
There is really no way to learn fullstack programming in 4 days. Even more important than any one specific technical skill to walk away from this class with, is the ability to be resourceful. One of the secrets of engineers that non-engineers may not know, is that we hardly ever expect the code to work the first time we run it. Embrace that, and get in the habit of using stack overflow, docs, and whatever else you can quickly google search.

**Read the lectures notes before class**
Learning coding can be pretty hard at the beginning especially if you have never been exposed to it. Read the lectures notes before each classes will help you understand faster key concepts that will be taught in class.

**Ask questions!**
After you have done some research through google, don't be afraid to ask questions when you are stuck. If you don't understand something, you will most likely not be the only one. Don't hesitate to raise you hand and ask, I can't stress this enough.

**In case you feel it's 'easy'**
With so many students, from a range of backgrounds, it's impossible to make the curriculum perfect for everyone. We will be moving at a very fast pace, in case something feels 'basic' or 'easy' for you in the early stages, there is a very good chance that we will be catching up to your current knowledge base within a day, or even just a couple hours. With that said, if at any point you feel the current lecture is too much of a review for you, feel free to skip ahead! Also, feel free to customize the app your way- just because we style it a certain way or give it certain functionality, does not mean yours has to be the exactly the same. The only thing we ask is that you pass the same 'reality checks' as the rest of the class. Occasionally we will do a 'thumb check' to see if there is anyone who does not have their app at a certain point of functionality. 

**Imposter Syndrome is Real**
In case you feel lost... you're not the only one. Because of the nature of programming (oftentimes staring at a screen for prolonged times), we may be tempted to think that everyone else is just hacking away without any errors, everyone except for us. The truth is that when an experienced developer runs new code for the first time, they usually _don't expect it to work_; they know that most of the time as a developer you are fixing bugs, researching, and just "figuring it out" as you go along. Being in a state of uncertainty is a natural feeling for a developer, you just need to develop the habit of knowing that there almost always is _some_ sort of solution and path forward (even if it isn't clear). 



### Get to know each other activity! [Link to Activity](https://ibm.box.com/s/n9h9ls4eixi79co3ezo1dnw7qj2ewtzq)

### Exercise- So what is a fullstack app? 

### Initial Setup 
**Dependencies**

You will need to have 5 things already installed on your computers:
- Node
- NPM
- Git (almost all computers come with git already)
- Sublime Text (or similar text editor)
- Mongo

To check if any of the 5 are installed, you can run 'which node', and you should get the path where it is installed. Typically they are installed within our bin folder. If they are located somewhere else, no need for immediate action, but something to keep in mind. 

* [Install Node](https://nodejs.org/en/)
* [Install NPM](https://www.npmjs.com/)
* [Install Git](https://git-scm.com/book/id/v2/Getting-Started-Installing-Git)
* [Install Sublime](https://www.sublimetext.com/3)
* [Install Mongo](https://docs.mongodb.com/manual/installation/)

You also should already have an account on * [Github](https://github.com)


**Getting our Repo Locally**

We are going to get an introduction to Shell Commands, while cloning down the remote repo that I have up and running here: LINK

* Shell Commands ([POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/)/[UNIX](https://upload.wikimedia.org/wikipedia/commons/c/cd/Unix_timeline.en.svg))
    * `ls` (`-t`, `-a`)
    * `pwd`
    * `mkdir`
    * `cd`
    * `touch`
    * `mv`
    * `rm`
[Here](http://www.galvanize.com/learn/learn-to-code/programming-101-how-to-use-the-terminal-command-line/) is a video that explains more in depth the use of the command line.

*> Exercise: follow along with me to learn some command line basics, and let's create the repo for our project*


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
look into GraphQL http://graphql.org/learn/

*> Let's Try it!: Let’s try it! Let’s make a request to the weather API!* 

HINT: There are websites that give you demo environments to send out API calls to other servers.

Advanced: 
- Get back the current hurricane info from around the world
- Write the same request from postman
- Write the same request from the terminal (using curl)
- What other responses can you get? Reddit, Spotify, and Google Places are some ideas.


