# Web APIs

APIs are main way we acess companies services. Some prominent ones from IBM are the Watson APIs. In this section, we are going to practice using Watson APIs from our Node App and make our app cognitive. 

Watson SDKs
SDKs or software development kits are set of software tools or libraries that allows developers to create applications using another piece of application. 

A good SDK typically comes with instructions and is actively maintained. Watson 


In this section we will practice looking up documentation for both IBM and other APIs (google). As a developer looking up documentation and digesting it quickly is a useful skill to have. 



The Deployed App we will be making today is right here: https://www.ibm.com/watson/services/natural-language-understanding/
the 2 API endpoints are 

/api/nlu 
which takes an input of 
body: {
  url: article_url
}
make a couple of postman calls to this endpoint. 

/api/imgsearch 
which takes an input of 
body: {
  img_url: image_url
}


Part 1: 
Check out the documentation for NLU, find out how to make a request to NLU and get something back. 
https://www.ibm.com/watson/services/natural-language-understanding/
I've already made the frontend for this website, currently it just returns null

Play around with my deployed app in Postman to figure out what's the output of this API. Try to recreate this endpoint


Part 2: Create a reverse image search app, practice using Watson Visual Recognition API, and practice using Google Custom Search API

https://developers.google.com/custom-search/docs/overview
