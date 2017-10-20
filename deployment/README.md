# Deploying to Bluemix with Git & MongoDB

Deployment is generally the last stage of development (after thorough testing) and creates/replaces your public production application with a new version of your app. Deployment involves not only transferring new code to a live server, but also configuring that server to deal with your files and run your application. In the simplest terms, this means telling the server what files to execute when it receives an incoming request. Luckily, the newer options such as Bluemix and Heroku do almost all of this configuration for us. 


## Let's deploy!

- Navitage to the bluemix console
- Click up on the top right "Catalog"
- Find "SDK for Node.js" (easiest to just search)

SDK stands for software development kit. I have seen the term used pretty loosely to describe a range of things, but in general it refers to any sort of package that makes it easier for you to get up and running - the boilerplate code, the configuration files, the readme .... all of these can add up to make the SDK. 

- Enter in an app name and hit next (you can leave the host name to be the same)
