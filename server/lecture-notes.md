# The Server - Node with Express

## What you'll learn in this course
* Understand what JavaScript is


A server is basically just a computer that provides functionality for another computer - the client. Typically the client is what a user interacts with, and a server is behind the scenes. The server is where any logic concerned with data persistence would be found (reading and writing from the database), and is what serves up the client-side code in the first place. Clients and servers have a many to many relationship, meaning that a server can have multiple clients, but a client can also pull in from multiple servers. Also, the client and server can be on the same device (such as when you are developing locally like we will be doing), or it can be connected remotely (although there may need to be additional security considerations). 

Javascript is known as a browser-side language, and for good reason, it is the language of the web, and was designed for that purpose. Despite it's immense market share across the web, occasionally some developers would not consider it a "true" programming language, as it was not as robust as Python or Java. Up until about 8 years ago, this may have been true since JS was exclusively for the web (executed by the browser, but about 8 years ago that changed, with the introduction of Node, an opensource Javascript runtime environement that executes on the server side. 

One of the primary components of Node is that it runs asynchronously. This means it does not have to wait for the termination of a previous process/function to complete, before it continues to execute the code.  

#### Background:

JavaScript was created in 1995 by Brendan Eich, an engineer at Netscape, and first released with Netscape 2 early in 1996.
JavaScript is the only scripting language that can be run by your browser.

**Practice 1: Setting Everything Up**

#### Pulling in dependencies with the package.json file


```package.json
{
  "name": "react-universal-blog",
  "version": "1.0.0",
  "engines": {
    "node": "4.1.2",
    "npm": "3.5.2"
  },
  "description": "",
  "main": "app-server.js",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-es2017": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-register": "^6.26.0",
    "cosmicjs": "^2.4.0",
    "flux": "^3.1.3",
    "history": "1.13.0",
    "hogan-express": "^0.5.2",
    "html-webpack-plugin": "^2.30.1",
    "path": "^0.12.7",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-router": "1.0.1",
    "webpack": "^3.5.6",
    "webpack-dev-server": "^2.7.1"
  },
  "scripts": {
    "webpack-dev-server": "NODE_ENV=development PORT=8080 webpack-dev-server --content-base public/ --hot --inline --devtool inline-source-map --history-api-fallback",
    "development": "cp views/index.html public/index.html && NODE_ENV=development webpack && npm run webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "react-hot-loader": "^1.3.0"
  }
}

```

**Practice 2: Interacting with the DOM directly through Javascript**

What is the DOM? The DOM is the Document Object Model. Basically, the entire webpage (all the elements, from the `body` to each invividual `div`) is represented as a series of Javascript Objects that have methods and properties.

JavaScript allows us to interact with HTML/CSS by directly manipulating items on the DOM - we can select DOM elements by using CSS/Element selectors and change them dynamically. We can also create elements on the fly. All of this functionality is accessed off of the `document` object in the browser. Let's check it out in our chrome developer console.

Event listeners are one of the most important components of interactivity on a webpage. They allow us to execute code when a certain user action takes place, like a `click`. Add the following code into the `script` section in your HTML file:

 ```js
var playerTitleElement = document.getElementById('player_title');

playerTitleElement.addEventListener('click', updateName);

function updateName(event) {
  var name = prompt('Enter a new name');
  event.target.textContent = 'Player 1: ' + name;
}
 ```

#### JS Functions

JS functions take optional arguments and return values. The default return value is `undefined` and we must explicitly use the `return` keyword to return anything else. There are several ways to define a function:

```js
   var multiplyByThree = function(num) {
     return num * 3;
   }

  function multiplyByThree(num) {
    return num * 3;
  }

  console.log(multiplyByThree(5));
```

**Exercise 1:**

Add another user prompt into the `updateName()` function. It should ask the user to enter a color. Store that color into a new variable called `color`. Then use that variable to change the color of the playerTitle element's background. *Hint: you can access an element's css through its `.style` property. You can change it by simply reassigning the value to the new color*

**Linking to external JavaScript files:**

```html
 <script src="/path-to-a-javascript-file"></script>
 ```

**Exercise 2:**

Let's move our JavaScript into an external file. Name it `script.js`. Reference it in the `<script>` tag by defining the relative path of the file in the `src` property. Make sure it's working by testing out the functionality of the `player` button.

#### Data Types, Arithmetic Operators, & Comparisons
JavaScript has many of the same datatypes as Ruby:

* Number: 1, 23452345
* String: 'Hello World', "Hi there'
* Boolean: true, false
* Array: [1, 2, 3]
* Null, Undefined

#### Making Comparisons: JavaScript evaluates the comparison, returning true or false

* Greater than: `>`
* Less than: `<`
* Equality: `==`; Converts operands if they aren't the same type, then applies strict equality; Eg: 1 == "1"
* Strict Equality: `===` Two operands are equal without type conversion: Eg: 1 === 1
* Not equal: !=
* Strict not equal: !==
* Greater or equal: >=
* Less or equal: <=

#### Arithmetic Operators: 5 operators with the same order of operations as your traditional arithmetic

* Multiplication: `*`. Eg: 5 * 10 = 50;
* Division: `/`. Eg: 10/5 = 2;
* Addition: `+`. Eg: 5 + 7 = 12;
* Subtraction: `-`. Eg: 7 - 5 = 2;
* Modulus: `%`: Performs division and returns the remainder. Eg: 6 % 3 = 0; Eg: 7 % 3 = 1;

**Exercise 3:**

Let's create a simple tip calculator. Under the `player_title` `div`, let's add:

```html
<br/>
<input id="meal_cost" type="number"/>
<br/>
<button id="add_tip">Add Tip</button>
<br/>
<div id="total_cost"></div>
```

Create a function called `AddTip` that has a `prompt` in it that asks the user what percent tip they want to leave. The prompt should store the value into a variable called `tipAmount`. You can get the meal price from the input box by selecting the element using its ID and then accessing the `value` property. Save this amount into another variable called `mealPrice`. Try doing some simple arithmetic and update the `textContent` of the `total_cost` div with the total amount. Finally, add a `click` listener onto the `add_tip` button and specify your `AddTip` function as the callback. *Your solution will have a small but critical issue - what is it any why is it happening?*

#### JS Objects:

JS objects are similar to hashes in Ruby. One critical difference is that a JS object can have a functions as a value. The `this` keyword refers to the object itself, much like in ruby when `self` is used to refer to current Class or Instance.

```js
var harry = {};
harry.height = "6 feet";
harry.weight = "190 lbs";
harry.profession = "Barber";
harry.children = ["Jack", "Jill", "Gretta"];
harry.praiseChildren = function(){
  var praises = ["kind", "curious", "adventurous", "hard working", "musically gifted"];
  for (var i = 0; i < this.children.length; i++){
    console.log(this.children[i], "is so", praises[Math.floor(Math.random()*3)])
  }
}
```

* Methods: JavaScript objects, arrays and functions each have their own unique properties and methods available to them
• Full list of built in JavaScript methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index

#### Loops/Iterators
**Loops allow you to execute a block of code multiple times until a condition is met**

* For Loops: executed until a specific condition returns false.
```js
for (initialization; condition; increment) {
  // statements
}

var ages = [30, 35, 10, 22, 18, 12];

for (var i = 0; i < ages.length; i++) {
  console.log(ages[i] + " years old");
}
```

* While Loops: Executed while a condition is true.
```js
var start = 1;
while (start < 10) {
  console.log("start: " + start);
  start++; // shorthand for start = start + 1
}
```

**Exercise 4:**

Using a `while` loop, create a number guessing game. You will need two variables, one for the guess and one for the answer. To supercharge your game, give the user hints about whether their number is high or low depending on their guess - you can use conditionals and comparison operators for this. *Hint: The computer can choose a starting number between 0-100 by using `Math.round(Math.random()*100)`*

**Bonus**
Complete 'Javascripting' (feel free to skip over the first few challenges) https://github.com/workshopper/javascripting

#### Extra Resources
* https://www.codecademy.com/learn/javascript
* https://www.tutorialspoint.com/javascript/
* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
