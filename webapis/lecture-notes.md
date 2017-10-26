# Web APIs

APIs are main way we acess companies services. Some prominent ones from IBM are the Watson APIs. In this section, we are going to practice using Watson APIs in our Node app to showcase some of their capabilities. 

Watson SDKs
SDKs aka software development kits are set of software tools or libraries that allows developers to create applications using another piece of application or services. 
A good SDK typically comes with instructions and is actively maintained. Watson SDKs are documents on our website and open sourced on github
https://github.com/watson-developer-cloud
Take a look at it and let's talk about how it makes a developer's job easier.


In this section we will practice looking up documentation for both IBM and other APIs (google). As a developer looking up documentation and digesting it quickly is a useful skill to have. We will also be looking at how different APIs can be combined together to become a coherent app that's orchestrated by Node. This task requires a bunch of javascript processing. It's up to the developer to decide how we want to process/use the data responses and how mix them in order to building interesting applications. 



The Deployed App we will be making today is right here: https://www.ibm.com/watson/services/natural-language-understanding/
the 2 API endpoints are 

```
/api/nlu 
```
which takes an input of 
```
body: {
  url: article_url
}
```
make a couple of postman calls to this endpoint and play around to see the return value. 


```
/api/imgsearch 
```
which takes an input of 
```
body: {
  img_url: image_url
}
```


## Part 1: 
Check out the documentation for NLU, find out how to make a request to NLU and get something back. 
https://www.ibm.com/watson/services/natural-language-understanding/
I've already made the frontend for this website, currently it just returns null
Play around with my deployed app in Postman to figure out what's the output of this API. Try to recreate this endpoint so when our frontend makes the call, it will display the results similar to what I have. 


## Part 2: 
Create a reverse image search app, think about how you can go about accomplishing this. 

Practice using Watson Visual Recognition API, and research Google Custom Search API. Here are a couple of useful links for google

https://developers.google.com/custom-search/docs/overview
https://developers.google.com/custom-search/json-api/v1/overview
Create an account with Google, and get an API Key, create a custom search engine using google.com. The following 2 links should help you get started with Google. 


