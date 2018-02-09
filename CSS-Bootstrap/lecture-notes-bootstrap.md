# Intro to Bootstrap

## What you will learn in this course
* Describe what Bootstrap is and explain how the grid system works
* Place different Bootstrap components onto a static page
* Manipulate different Bootstrap elements with custom CSS
* Design and create webpages using Bootstrap elements and styling 

### Why you might want to use Bootstrap

1. <b>Speed of Development</b><br>
The use of Bootstrap really increases the speed at which a developer can stylize their webpage.  There are a lot of prewritten tools that allow the developer to put together a page without coding from scratch.

2. <b>Responsiveness</b><br>
Bootstrap comes with a responsive design pattern that allows programmers to create pages that respond to the different screen sizes of phones, tablets, and computer monitors.

3. <b>Customization</b><br>
While Bootstrap comes with a lot of built in features, a developer can customize the different components of Bootstrap to create a look that fits the needs of the site.

4. <b>Support</b><br>
There is a large community of developers that use Bootstrap in their personal projects and on the professional landscape.  Because of this, there is a large and well-documented community of support throughout the web whenever a developer has a question or runs into a problem.

### How to use Bootstrap

Add the viewport meta tag and the <a href="http://getbootstrap.com/getting-started/#download">Bootstrap CDN</a> to the ```<head></head>``` of your HTML file.

```
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
</head>
```

Then add the necessary javascript dependency right above the closing `</body>` tag: 

```
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
```

_Exercise: Go ahead and add the dependencies to your index.html file. Does our page look different?_

It actually doesn't look as good as it did before. Can anyone think of why this is? How can we fix it back to how it was before, while still keeping bootstrap? 

_Exercise: Let's fix this. Follow along as we upgrade our navbar and make it mobile friendly with bootstrap_

First of all, we always want to be sure that our own styling is taking priority over the default bootstarp styles. Secondly, let's go ahead and fix up the spacing on the nav, add the following to our main.css: 
```
nav {
	display: flex;
	width: 400px;
	justify-content: space-between;
	flex-wrap: wrap;
}
```

Now that we have our navbar in place, let's put in a placeholder that will represent a blog post. Bootstrap 4 recently came out, and one of the new features it includes are "cards." These are basically content containers that come with a lot of built-in responsive styling. Add the following after your closing header tag: 

```html
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h4 class="card-title">My First Blog Post</h4>
        <p class="card-text">It is time to learn some fullstack programming. Are you ready?</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
```

It looks pretty good because it's responsive, but let's go ahead and make it more narrow. Cards come with a built in class adjusters such as `w-75` or `w-50` which will automatically modify the width of our cards. I'm going to go ahead and add `w-50` but you can already start to play around with alternatives if you think something else would look better.

Looks better, but let's fix up the spacing. 

_Excercise: pop open your Developer Tools in the browser and let's make it look cleaner. HINT: Check out the tab that says "computed"_

Cool, now that looks good, but how else can we improve the spacing? Notice that when you drag the browser to mobile width the blog posts become very narrow. The 50% width looks great on desktops but not so good on mobile. Enter the grid system. 

### Bootstrap Grid System

1.  `.container` class holds `.row` classes
2.  Rows create horizontal groups of columns, based on a system of 12 columns
```html
<body>
	<div class="container-fluid">
	  <div class="row">
	    <div class="col-xs-12 col-sm-6 col-md-3">
	      <p>I take up a quarter of the page on a medium device and above.</p>
	    </div>
	    <div class="col-xs-12 col-sm-6 col-md-3">
	      <p>I take up half the page on a small device</p>
	    </div>
	  </div>
	</div>
</body>
```
4.  `xs-*`, `sm-*`, `md-*`, `lg-*` refer to targeted device sizes ([spec reference](http://getbootstrap.com/css/#buttons-options))
5.  The best way to learn about the Bootstrap grid system is to see it in action:

- <b><a href="https://www.instacart.com/">Instacart</a></b><br>
- <b><a href="https://www.lyft.com/">Lyft</a></b><br>
- <b><a href="https://www.meteor.com/">Meteor</a></b>



## Challenge

1. Make the blog posts stretch across the entire screen horizontally for mobile, but not for desktop
2. Center the blog posts horizontally
3. Add a top section on your homepage above the blog posts. This could be an image or header text with a color background. Sometimes this section is called a "hero."

HINT: Bootstrap has a component called a "Jumbotron" that can help with Challenge #3


**Bonus: [Wild + Wacky Vegetables](https://github.com/Ollynov/FullStack-TSchool/blob/master/bootstrap-git/exercises.md)**

## Some more resources

* <a href="https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system">Understanding the Bootstrap System</a><br>

* <a href="http://expo.getbootstrap.com/">Inspiring Uses of Bootstrap</a><br>

* <a href="http://www.creativebloq.com/wireframes/top-wireframing-tools-11121302">Some Wireframing Tools</a>

* <a href="https://startbootstrap.com/bootstrap-resources/">Some Bootstrap Resources</a>

* <a href="https://www.youtube.com/watch?v=gqOEoUR5RHg">YouTube Bootstrap Tutorial</a>


### BONUS: Using themes for inspiration:

From here I would go to a website like: https://bootswatch.com/ in order to look at different styling elements. You can follow the source code and integrate it into your application.
