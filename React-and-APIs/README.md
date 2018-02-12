# React and APIs

## What you'll learn in this course
* Understand the role of an API
* Integrate APIs into our existing application
* Work with the Watson Services


## Section 1
### API Review
APIs are designed to allow external clients to access data on a server. Clients, in this case, can be user devices or other web servers.

In this section we will practice looking up documentation for both IBM and other APIs (google). As a developer looking up documentation and digesting it quickly is a useful skill to have. We will also be looking at how different APIs can be combined together to become a coherent app that's orchestrated by Node. This task requires a bunch of javascript processing. It's up to the developer to decide how we want to process/use the data responses and how mix them in order to building interesting applications. 

## Section 2
### DS API
Let's work with a Python model that the data science students have put together that will allow us to estimate the reading time required for each of our blog posts. We will be using Postman to explore how this API works. 

## Section 3
### Integrate DS API

Working File / Directory:
**src/app/components/WritePost/WritePost.js**
**src/services/reading.js**

We need to change the `onSubmit()` function within `WritePost.js` and create a new service for calling the API within `services/reading.js`.

## Section 4 
### Working with Watson
Some prominent ones from IBM are all of the Watson APIs. In this section, we are going to practice using Watson APIs in our Node app to showcase some of their capabilities. 

### Intro to SDK
https://github.com/watson-developer-cloud
SDKs(software development kits) are a set of software bundles that allow developers to create applications using other pieces of applications or services. Basically they are there to get you running with the app right away- they include starter code, examples, and good README files. A good SDK typically comes with instructions and is actively maintained. Watson SDKs have README documents on our website and open sourced on github. 

### Intro to NLU
https://natural-language-understanding-demo.ng.bluemix.net/?cm_mc_uid=98983598928515158736786&cm_mc_sid_50200000=1518400932&cm_mc_sid_52640000=1518400932

## Section 5
### Utilizing Watson SDK

**Requirements** 
Create a new `.env` file and enter the information provided by the instructor in the Slack channel. Ensure that you also have a `.gitignore`

### Exercise
Open the `nlu-exercise` folder and run then run `npm install` to install all dependencies for this exercise. We will be following the instructions provided in the `index.js` file within this folder to work with the Watson NLU SDK. 

## Section 6
### NLU API
Utilize custom API created for this class to work with the Watson NLU SDK. 

## Section 7
### Integrate NLU API 
We are now going to go back to the blog app and integrate the NLU API into our application the same way that we did with the Reading API provided by the Data Science course.

Working File / Directory:
**src/app/components/WritePost/WritePost.js**
**src/services/nlu.js**

We need to change the `onSubmit()` function within `WritePost.js` and create a new service for calling the API within `services/nlu.js`.


## Section 8
### Combine APIs

Working File / Directory:
**src/app/components/WritePost/WritePost.js**
**src/services/nlu.js**
**src/services/posts.js**
**src/services/reading.js**

We need to create a new post call that brings all of these services together to store a new post within our database. 

## Section 9
### Refactor Post Component

Working File / Directory:
**src/app/components/Posts/PostAdvanced.js**

Let's take a look at our new posts. Refactor the post component to display the new data that we've stored with each post. (Reading time and NLU analysis)