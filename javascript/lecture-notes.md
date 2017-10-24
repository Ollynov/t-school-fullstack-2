# Javascript

## What you'll learn in this course
* Understand what JavaScript is
* Learn about 'Data Types' in JS
* Learn what a function is and how to write it
* Understand Control Flow
* Understand how JS is used in the browser


#### Background:

Like Java, Python, and Ruby, JavaScript is a scripting language that allows you to build dynamic software systems. One of the benefits of JavaScript is that it can run in your browser, serving as a client-side scripting language. Through technologies like Node.js, JavaScript can also be used as a server-side scripting language. However, it's was really designed to be _the_ language for the browser, and almost all interactive effects that you see on a webpage are likely enabled by JavaScript.

JavaScript was created in 1995 by Brendan Eich, an engineer at Netscape, and first released with Netscape 2 early in 1996. Legend has it that he made the language in 10 days. Because of that there have always been many quirks (more like bugs) in the language itself, but with releases it continues to improve. ES6 was the latest big improvement to the language in June 2015; the previous one was way back in 2009. 

It continues to grow in popularity- especially with the emergence of popular frameworks such as Angular and React. Jquery is still the most popular framework, used in about 85% of websites today. It's a framework that makes it easier to manipulate the DOM. A button indenting as you click it, would be an example of manipulating the DOM. We will be doing some activities today where you will be challenged to manipulate the DOM, but with pure javascript. With jQuery you can most likely do the activities with less lines of code, but it is important to note that it includes its own syntax that is different from vanilla javascript. 



**Practice 1: Interacting with the user directly through the browser**

JavaScript is powerful because it allows us to interact with the user through the browser.
* open a tab in Chrome and try the following:
    * `alert(5 + 7)`
    * `alert("The date and time is now " + new Date());`
    * `var favoritePark = prompt("What is your favorite park in San Francisco?")`
    * `console.log("Your favorite park in SF is", favoritePark)`

#### Writing JavaScript directly within HTML files and linking to external scripts

```html
<!DOCTYPE html>
<html>
 <head>
    <title>JS Test</title>
    <style>
      #player_title {
        font-family: 'helvetica neue', helvetica, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid rgba(0,0,200,0.6);
        background: rgba(0,0,200,0.3);
        color: white;
        box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
        border-radius: 10px;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
      }
    </style>
 </head>
 <body>
    <div id="player_title">
      Player 1: Jennifer
    </div>
    <script>
      // js goes here
    </script>
 </body>
</html>
```

**Practice 2: Interacting with the DOM directly through Javascript**

Create a new file called tester.html

What is the DOM? The DOM is the Document Object Model. Basically, the entire webpage (all the elements, from the `body` to each invividual `div`) is represented as a series of Javascript Objects that have methods and properties.

JavaScript allows us to interact with HTML/CSS by directly manipulating items on the DOM - we can select DOM elements by using CSS/Element selectors and change them dynamically. We can also create elements on the fly. All of this functionality is accessed off of the `document` object in the browser. Let's check it out in our chrome developer console.

Event listeners are one of the most important components of interactivity on a webpage. They allow us to execute code when a certain user action takes place, like a `click`. 

_Exercise Let's get our "Player App" working. Add the following code into the `script` section in your tester.html file after adding the above html_

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

**Adding some functionality with javascript to our site**

_Exercise- Follow along as we add a modal popup to our site for signup. This will be the first example of javascript being used on our site for some functionality that wouldn't have been possible with purely html and css. 

Add the following before our closing `</body` tag: 
```
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Signup</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            [Form goes here]
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
```

Now we just need to trigger to form popup. We can do this by adding the following attributes to our buttons:
`data-toggle="modal" data-target="#exampleModal"`

Let's add it to our signup buttons. Something to note is that even after using this modal several times in production apps, I still don't have this memorized. The fact that we need to add both data-toggle and data-target attributes to our buttons that trigger the popup is _not something that you are expected to have memorized._ Once you know what is possible, you take it step by step and do googling and referencing of previous projects you've built to build your new functionality. 

**Exercise 4**

Add a form to our modal popup. Right where it says `Enter form here`


**BONUS Exercise 5:**

Using a `while` loop, create a number guessing game. You will need two variables, one for the guess and one for the answer. To supercharge your game, give the user hints about whether their number is high or low depending on their guess - you can use conditionals and comparison operators for this. *Hint: The computer can choose a starting number between 0-100 by using `Math.round(Math.random()*100)`*

**Bonus**
Complete 'Javascripting' (feel free to skip over the first few challenges) https://github.com/workshopper/javascripting

#### Extra Resources
* https://www.codecademy.com/learn/javascript
* https://www.tutorialspoint.com/javascript/
* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
