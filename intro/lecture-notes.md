<img src="https://www.research.ibm.com/university/cas/benelux/images/eye-bee-m.gif" >

# TIME FOR SOME FULLSTACK PROGRAMMING

The goal of this first session is to get to know each other, provide some context on what we will be building, and to see if there are certain holes in our understanding of fullstack. We will structure the course about 30% lecture, and 70% hacking, because we are firm believers that the best way to learn, is by doing. Also- in case you are solid in certain portions of the stack, yet weak on others, you can be sure to put extra emphasis on those. The assumption is that you already know the fundamentals of programming, and html, so we can quickly move onwards to the interesting stuff!!

## What you will learn in this first section
* Use basic commands of the Terminal
* Use the browser development tool / inspector
* Structure a webpage with HTML
  * Create a list
  * Embed an image into your webpage
  * Create a form
  * Create a navigation menu


## Introductions
### Our Project
We are going to be building a fullstack app, with extra emphasis on the portions that can be duplicated for any web app (authentication, responsive design, etc.). We will move rapidly, but will be covering more or less everything that constitutes a one-page CRUD app. This stands for 'CREATE, READ, UPDATE, DELETE' - essentially we want our app to have database persistence, and functionality to update portions of the page as we navigate, perform actions, etc. If you can get comfortable implementing the most crucial components, you can always replace with different technologies, different APIs, different styles, etc. for the future app of your choice. We want you to get creative both during the course, and afterwards when you go home, and have this app to play around with.

We will be building a simple blog, but feel free to build whatever app you would like. We ask that you follow along in the first two days where we will cover basics that should apply to any app- server setup, responsive navbar, database integration, authentication, etc. but feel free to get creative, especially during the hacking sessions!

### Some Course Themes
Some good rules of thumbs to remember during the class are:

**Google when you don't know**
There is really no way to learn fullstack programming in 4 days. Even more important than any one specific technical skill to walk away from this class with, is the ability to be resourceful. One of the secrets of engineers that non-engineers may not know, is that we hardly ever expect the code to work the first time we run it. Embrace that, and get in the habit of using stack overflow, docs, and whatever else you can quickly google search.

**Read the lectures notes before class**
Learning coding can be pretty hard at the beginning especially if you have never been exposed to it. Read the lectures notes before each classes will help you understand faster key concepts that will be taught in class.

**Ask questions!**
After you have done some research through google, don't be afraid to ask questions when you are stuck. If you don't understand something, you will most likely not be the only one. Don't hesitate to raise you hand and ask, I can't stress this enough.

**Imposter Syndrome is Real**
In case you feel lost... you're not the only one. Because of the nature of programming (oftentimes staring at a screen for prolonged times), we may be tempted to think that everyone else is just hacking away without any errors, everyone except for us. The truth is that when an experienced developer runs new code for the first time, they usually _don't expect it to work_; they know that most of the time as a developer you are fixing bugs, researching, and just "figuring it out" as you go along. Being in a state of uncertainty is a natural feeling for a developer, you just need to develop the habit of knowing that there almost always is _some_ sort of solution and path forward (even if it isn't clear). 


### Initial Setup
You will need to have 3 things installed on your computers already:
- Node
- NPM
- Git (almost all computers come with git already)

To check if any of the 3 are installed, you can run 'which node', and you should get the path where it is installed. Typically they are installed within our bin folder. If they are located somewhere else, no need for immediate action, but something to keep in mind. 

* [Install Git](https://git-scm.com/book/id/v2/Getting-Started-Installing-Git)
* [Github](https://github.com)

### IDE/CLI
An Integrated Development Environment (IDE) is program that combines several tools a software developer needs into one place. An IDE usually acts as a text editor, a debugger and a compiler. The IDE we are going to use in this class is called Cloud 9. With this tool you will be able to write code and directly execute it online without ever putting anything on your own computer.

* Create our first workspace in Cloud9
    * HTML5
    * GUI
    * IDE
    * CLI

At the bottom of your workspace in Cloud 9, you will see something called the command line interface (CLI) or console or shell. Typically, this application will let you access, create, delete files and folders without using the usual graphical interface of your computer. It is very useful once you start creating complex applications because you will need to have all your work in local files and still be able to share it with your team.
[Here](http://www.galvanize.com/learn/learn-to-code/programming-101-how-to-use-the-terminal-command-line/) is a video that explains more in depth the use of the command line.

* Shell Commands ([POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/)/[UNIX](https://upload.wikimedia.org/wikipedia/commons/c/cd/Unix_timeline.en.svg))
    * `ls` (`-t`, `-a`)
    * `pwd`
    * `man`
    * `mkdir`
    * `cd`
    * `touch`
    * `mv`
    * `rm`

*> Exercise: follow along with me to learn some command line basics*

### HTML

Hyper-text Markup Language represents the frame or skeleton of any web page that you see on the Internet. Any front-end or full-stack developer will be working with it daily. The basic concepts of HTML can be learned quickly and you’ll have time to deepen your knowledge of specific attributes, tricks, and tools over time.

#### HTML page structure, head & body

Let's create an index HTML file: `$ touch index.html`

Tags are the foundation of HTML. They usually start with `<name of the tag>` and end with `</name of the tag>`. You will be able to put text within the opening and closing tag. This is how you will structure your webpage with HTML. Here is an example of some basic tags:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    Content Here
  </body>
</html>
```
[HTML body tags full list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Commonly Used Tags:

- Headings: `<h1> - <h6> <h1>Hello World</h1>`
- Span: `<span>Copy text</span>`
- **Div**: `<div> [content to be placed inside] </div>`
  - inspect FB page with Chrome Dev Tools (cmd + alt + i)

##### Dev Tool
Now that you have a first experience with Chrome dev tool let's explain a little bit what it is. Dev tool is something in your web browser where you will be able to inspect elements or write directly some code on a webpage. This is very useful and powerful as it can help you writing or testing your code.

*> Exercise: Change the title. Then add a heading of whatever size you want within the body and put one of the words into a span*

Let's create a page directory: `$ mkdir pages`

#### Lists:
Lists are often used in HTML. For example, you can easily create navigation menu thanks to lists. There are two types of lists:

- Unordered list: `<ul> [list items] </ul>`
- List item: `<li> item </li>`

Let's create a menu file: `$ touch pages/products.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Products</title>
  </head>
  <body>
    <ul>
      <li>Burrito</li>
      <li>Dumplings</li>
      <li>Spaghetti</li>
    </ul>
  </body>
</html>
```


#### Form:
Forms are used everywhere in the internet. The most common ones are contact forms. Here is how to build them:

- Label `<label>`
- Input `<input>`
- Horizontal Rule (aka: horizontal divider line): `<hr>`
- Line break: `<br>`

Let's create a contact us file: `$ touch pages/contact_us.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
  </head>
  <body>
    <form>
      <div>
        <label>Email</label> <input required="required" type="email"/>
      </div>
      <div>
        <label>Image</label> <input required="false" type="file"/>
      </div>
      <div>
        <label>Compress Photo?</label>
        <input type="checkbox" value="1"/>
      </div>
      <br>
      <div>
        <label>Category</label>
        <select>
          <option value="1">Compliment</option>
          <option value="2">Complaint</option>
          <option value="3">General Inquiry</option>
        </select>
      </div>
      <hr>
      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  </body>
</html>
```
*Exercise: add another dropdown menu item and another horizontal rule*

- Common form text field types: text, email, password, search, URL
- [Built-in validators](http://www.the-art-of-web.com/html/html5-form-validation/)
- Form field types without text field ‘input’: checkbox, file, radio, number range
- Form buttons: button, reset, submit [W3 Schools](http://www.w3schools.com/tags/att_button_type.asp)

#### Image:
If you want to have a nice webpage, you will probably need to add some images to it. One thing to know about image is that it is a self closing tag. Here is how to embed an image to your website:
- Image: `<img src=”file-path-or-URL” alt=”alternative title”/>`

Let's create an about file: `$ touch pages/about.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <div class="image_container">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/00/IBM_Watson_Logo_2017.png"/>
    </div>
  </body>
</html>
```

*Exercise: add an image of your choosing*


#### Navigation:
In order for your user to have a smooth navigation into your website, you will need to add a navigation menu. Here is a simple way to make one:

- Nav: `<nav> [nav items in here] </nav>`
- Links: `<a href="URL">Link title</a>`

```html
<nav>
  <a href="index.html">Home</a> |
  <a href="pages/about.html">About</a> |
  <a href="pages/contact_us.html">Contact Us</a>
</nav>
```
*Exercise: add this to each page at the top of the body and test it out. Something is broken - why?*


