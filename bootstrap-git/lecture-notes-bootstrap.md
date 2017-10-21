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

Then add the necessary javascript dependency right above the closing </body> tag: 

```
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
```

### Bootstrap Grid System

1.  `.container` class holds `.row` classes
2.  Rows create horizontal groups of columns, based on a system of 12 columns
```
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

## Challenges

1. Create an ```tester.html``` file and add the Bootstrap CDN.
2. Add one container, one row, and three col-** classes (your columns can be any width that add up to 12).
3. Make sure your three columns stack vertically when you are on mobile (xs) devices.
4. Add content to your columns (or make them each a different color).

NOTE: You might notice that this time around we had much less introductory lecture. That is intentional. It is important to get accostumed to googling the right way. We will go over the solution afterwards so give it your best. 

## Further Reading

* <a href="https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system">Understanding the Bootstrap System</a><br>

* <a href="http://expo.getbootstrap.com/">Inspiring Uses of Bootstrap</a><br>

* <a href="http://www.creativebloq.com/wireframes/top-wireframing-tools-11121302">Some Wireframing Tools</a>

* <a href="https://startbootstrap.com/bootstrap-resources/">Some Bootstrap Resources</a>

* <a href="https://www.youtube.com/watch?v=gqOEoUR5RHg">YouTube Bootstrap Tutorial</a>


### Let's add in some Bootstrap styling to our blog app

**Exercise: add a `table` with a `table-hover` class(a bootstrap class) to your `blog.html` file.**

**Exercise: add a 'new post' button with `btn-primary` to your `blog.html`.**


### Using themes for inspiration:

From here I would go to a website like: https://bootswatch.com/ in order to look at different styling elements. You can follow the source code and integrate it into your application.


### Resources:
https://www.railstutorial.org/book/filling_in_the_layout
https://bootswatch.com/
https://github.com/maxim/bootswatch-rails
