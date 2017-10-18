# React

React is one of the hottest web frameworks at the moment. It was created by developers at Facebook just a few years ago. Unlike many other popular web frameworks it is only concerned with the views. Many frameworks are considered MVC, which stands for Model-View-Controller, which means that the framework deals with essentially all aspects of an app. However, React is only concerned with the views (the part the user sees). The upside to this is that it is very fast because of how lightweight it is (much less code needed). The other reason that React is so popular is because of the order behind it... it gives structure to the way you organize your app. It certainly has a learning curve, but once you learn it, you will find yourself developing at a much faster pace than with pure html and javascript. 

## Exercise- Learnyoureact

 run `npm install -g learnyoureact` in your terminal
 
 Follow along the instructons and try to get as far as possible. Don't hesitate to ask questions. 
 
You may notice that the way that components are written in a strange way... almost like something in between javascript and html. It's a format called JSX. It is essentially javascript diguised as html. It makes it much more neat and ordered to write our "html" directly in our javascript files, and the JSX allows us to do this. The downside is that there is a little more configuration to be done beforehand, since we need a compiler (such as babel), to conver the JSX into pure javascript.  




Config stuff I did to get our app ready: 
- Added these scripts to package.json   
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js",
    "compile-dev": "webpack --watch"
  }
```
- npm installed react, react-dom, body-parser, babel, and webpack
- npm installed the following: 
npm install --save babel-core
npm install --save babel-preset-latest
npm install --save babel-preset-react
- Made a static directory where I moved index.html and where webpack will compile everything into bundle.js
- Added a webpack.config.js file
- Added a .babelrc file
- Changed line 5 of app.js to do app.use on '/static' now


Create a new repo called "components" and for now create a file called main.jsx and place it into that components directory. This file will contain the React UI components. 
 
A component is the main building block of a React app. Every small portion of a React site that you can see as a user is either an individual component, or makes up a larger component. For example, our navbar can be a single component, or may be composed of several smaller components (one component for each button for example)- the actual details are dependent on how you choose to structure your components. The great thing about these components is that they are encapsulated code, meaning that you can re-use them in multiple places in our app, without having to rewrite the code each time. This not only means less code that you need to actually write, but is crucial for maintaining the app, since when you make an update to a component, it will automatically update in all areas of your app where you use that component, and you are less likely to forget about one of them, which can lead to bugs. 
