# Web APIs

APIs are main way we acess a companie's services. Some prominent ones from IBM are all of the Watson APIs. In this section, we are going to practice using Watson APIs in our Node app to showcase some of their capabilities. 

SDKs(software development kits) are a set of software bundles that allow developers to create applications using other pieces of applications or services. Basically they are there to get you running with the app right away- they include starter code, examples, and good README files. A good SDK typically comes with instructions and is actively maintained. Watson SDKs have README documents on our website and open sourced on github
https://github.com/watson-developer-cloud
Take a look at it and let's talk about how it makes a developer's job easier.


In this section we will practice looking up documentation for both IBM and other APIs (google). As a developer looking up documentation and digesting it quickly is a useful skill to have. We will also be looking at how different APIs can be combined together to become a coherent app that's orchestrated by Node. This task requires a bunch of javascript processing. It's up to the developer to decide how we want to process/use the data responses and how mix them in order to building interesting applications. 



The Deployed App we will be making today is right here: 
https://tschool-webapi.mybluemix.net/

I have created 2 endpoints associated with the 2 tasks. The first is 

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


The second endpoint is 

```
/api/imgsearch 
```
which takes an input of 
```
body: {
  imgUrl: imageUrl
}
```

## Part 1: 
DOWNLOAD **simpleWebServerAPI** from slack, unzip and move it into desktop. 

do 
cd into the simpleWebServerAPI_work directory
```
npm install
webpack -w
npm run dev
```
- Our frontend is written in React
- Our web server is instantiated in server.js
- server.js delegates the endpoint routing to route.js using express router. 
- So the file of interest is **route.js**


Create a bluemix service for NLU, then check out the documentation for NLU, find out how to make a request to NLU and get something back. If you run out of services in your bluemix account, borrow one from your neightbor. 
https://www.ibm.com/watson/services/natural-language-understanding/

I've already made the frontend for this website, and our current API endpoints returns dummy data. 
Play around with my deployed app in Postman to figure out what's the output of this API. Try to recreate this endpoint so when our frontend makes the call, it will display the results similar to what I have. 

A sample response from the endpoint 
```
[
  {
    "entity": "President Trump",
    "sentiment": "👎",
    "emotion": {
      "sadness": 0.217896,
      "joy": 0.129113,
      "fear": 0.052895,
      "disgust": 0.50877,
      "anger": 0.186486
    }
  },
  {
    "entity": "Kevin Brady",
    "sentiment": "👎",
    "emotion": {
      "sadness": 0.210747,
      "joy": 0.535617,
      "fear": 0.052326,
      "disgust": 0.499101,
      "anger": 0.113137
    }
  },
  {
    "entity": "Tax Foundation",
    "sentiment": "👍",
    "emotion": {
      "sadness": 0.006967,
      "joy": 0.499539,
      "fear": 0.043032,
      "disgust": 0.041645,
      "anger": 0.036562
    }
  }
]
```


## Part 2: 
Create a reverse image search app, think about how you can go about accomplishing this. 

Practice using Watson Visual Recognition API, and research Google Custom Search API. Here are a couple of useful links for google

https://developers.google.com/custom-search/docs/overview

https://developers.google.com/custom-search/json-api/v1/overview

Create an account with Google, and get an API Key, create a custom search engine using google.com. The following 2 links should help you get started with Google. 


Sample output from /api/imgsearch
```
{
  'subject': 'Eiffel Tower',
  'links': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
    'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487701021/eiffel-tower-paris-france-EIFFEL0217.jpg?itok=m0MZOYjh',
    'http://www.toureiffel.paris/templates/tour_eiffel/img/home_360.jpg',
    'http://cdn.history.com/sites/2/2015/04/hith-eiffel-tower-iStock_000016468972Large-A.jpeg',
    'http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/149/History_Deconstructed_Eiffel_Tower_reSF_HD.jpg',
    'http://cdn.history.com/sites/2/2015/04/hith-eiffel-tower-iStock_000016468972Large.jpg',
    'https://i.amz.mshcdn.com/YUpVquS8hRrKrX2MjbmzfGGyChE=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F92786%2FGettyImages-163244886.jpg',
    'http://www.aviewoncities.com/img/paris/kvefr1243s.jpg',
    'https://booking.parisinfo.com/InfoliveImages/cityvision/tour_eiffel/office_du_tourisme_de_paris_tour_eiffel_2.jpg?mode=crop&width=420&height=270&scale=both',
    'https://www.toysonfire.ca/i/55037_224a39e/eiffel-tower-wood-kit-3811-55037.jpg'
  ]
}
```


