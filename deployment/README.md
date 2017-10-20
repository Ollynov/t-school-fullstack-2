# Deploying to Bluemix with Git & MongoDB

Deployment is generally the last stage of development (after thorough testing) and creates/replaces your public production application with a new version of your app. Deployment involves not only transferring new code to a live server, but also configuring that server to deal with your files and run your application. In the simplest terms, this means telling the server what files to execute when it receives an incoming request. Luckily, the newer options such as Bluemix and Heroku do almost all of this configuration for us. 

One thing to clarify- Bluemix is IBM's version of AWS or Rackspace, a place where you can deploy and host your applications in the cloud. However, the actual servers are Softlayer. Bluemix is mainly the graphical interface that we use, which makes it a lot easier to setup our softlayer servers and maintain them. Then there is also Cloudfoundry, a third party service which is integrated into bluemix. It offers some of the same features as bluemix, but one of the reasons it is integrated into Bluemix, is because they also offer excellent command line tools. We can deploy directly through our terminal, see logs (the 'health') of our app), and easily update our code.


## Let's deploy!

- Navitage to the bluemix console
- Click up on the top right "Catalog"
- Find "SDK for Node.js" (easiest to just search)

SDK stands for software development kit. I have seen the term used pretty loosely to describe a range of things, but in general it refers to any sort of package that makes it easier for you to get up and running - the boilerplate code, the configuration files, the readme .... all of these can add up to make the SDK. 

- Enter in an app name and hit next (you can leave the host name to be the same)


Now we need to make a manifest.yml file. This file is like a guide that our server will take into account when deploying. Since we are deploying onto bluemix, it already comes pre-packaged with a ton of features for us. One of them is this ability to just pick up on this file and recognize what sort of server it needs to set up. 

What are we forgetting? 

## Let's integrate MongoDB

- Search "Compose Mongo"
