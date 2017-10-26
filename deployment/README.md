# Deploying to Bluemix

Deployment is generally the last stage of development (after thorough testing) and creates/replaces your public production application with a new version of your app. Deployment involves not only transferring new code to a live server, but also configuring that server to deal with your files and run your application. In the simplest terms, this means telling the server what files to execute when it receives an incoming request. Luckily, the newer options such as Bluemix and Heroku do almost all of this configuration for us. 

One thing to clarify- Bluemix is IBM's version of AWS or Rackspace, a place where you can deploy and host your applications in the cloud. However, the actual servers are Softlayer. Bluemix is mainly the graphical interface that we use, which makes it a lot easier to setup our softlayer servers and maintain them. Then there is also Cloudfoundry, a third party service which is integrated into bluemix. It offers some of the same features as bluemix, but one of the reasons it is integrated into Bluemix, is because they also offer excellent command line tools. We can deploy directly through our terminal, see logs (the 'health') of our app), and easily update our code.


## Let's deploy!

In our app.js we were listening on port 8000 (code down at bottom of file). We need to change 8000 to be the following: 
`process.env.PORT || 8000` 

The `||` is an `or` statement, which means that if you don't have your process.env.PORT variable setup, then it will default to port 8000. 

This process.env.PORT is an environment variable, which is a variable that is saved on your computer system, and then can be referenced. [Process.env](https://nodejs.org/api/process.html#process_process_env) is a node module that returns the user's current environment. If we are to console.log it, it would look something like this: 
```javascript
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

We can also view our actual computer's environment variables by simply hitting 'printenv' on your mac. 

There are a couple of reasons you may want to use environment variables- the first being for convenience. For example, in a production level app you may have multiple areas in the app that you need to reference the port number, and if it is hard coded we need to change every instance rather than just the one environment variable in one place. The second reason is for security, if we have a repo that we are pushing to github, and we have an area of our app that requires a password or security certificate file, then we don't want to send up those secrets to the cloud for the world to see. Instead, we just save the password to process.env.PW on our computer, which would then be accessed through an environment variable. Finally, for deployment we need them. We actually don't know which port cloud foundry is going to want to host our app on, and it might change, so we need it to be a dynamic variable. 

**Bluemix**

- Navigate to the bluemix console
- Click up on the top right "Catalog"
- Find "SDK for Node.js" (easiest to just search for it)

SDK stands for software development kit. I have seen the term used pretty loosely to describe a range of things, but in general it refers to any sort of package that makes it easier for you to get up and running - the boilerplate code, the configuration files, the readme .... all of these can add up to make the SDK. 

- Enter in an app name and hit next (you can leave the host name to be the same)
- Wait for it to load, and then it should already have a deployed site with some sample code https://mysitename.mybluemix.net/ (replace 'mysitename' with whatever you named the app)

Go into the terminal now, we are going to take advantage of cloud foundry: 
- Type `cf api https://api.ng.bluemix.net` to set up your cloud foundry
- `cf login` (depending on what sort of user permissions you have, you may need to run `cf login --sso` instead, and then visit the url that they give you to grab the code and paste it into your terminal)

Now you should be able to select the 'org' that you want to use. If you hit "cf apps" at any point it will show you the current apps that you are registered with under that org. 

Before we are able to deploy, let's first create a new file in the top level of our repo called `manifest.yml`. This is a configuration file for our deployment. Just how our package.json helps set up our dependencies, this manifest.yml sets up the correct settings for deployment. Change "fullStackApp" to the name of your app. The "random-route" basically means that for now the app will create random route - you change this once you actually pay for a dedicated domain name. The "memory" is simply how much server memory you want to dedicate to your app- of course, more memory typically results in a faster app, but costs more.

```javascript
applications:
- name: fullStackApp
  random-route: true
  command: node my-app.js
  memory: 128M
```

Be sure you are currently in your projects root directory and simply run: 
`cf push`

As you wait for it to deploy, you can open a new tab in your terminal and run `cf logs myappname`

Debugging: 
- Run 'cf logs --recent'
- In case you get an error: "no space targeted" try running: `cf spaces` to see your spaces, then `cf target [spacename] -s`)
- In case you get "buildpackcompile failed cloud foundry" and don't see specific notes on why the build failed, you may want to delete your node modules folder. This is safe to do as long as you keep your package.json in the repo. 


## Let's integrate MongoDB (database lesson)


## Things not covered but worth looking into: 
- Debugging
- Testing
- Logging
- Continuous Integration
