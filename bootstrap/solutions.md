## index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Our App</title>
    <link rel="stylesheet" href="styles/main.css">
  </head>
  <body>
		<header id="topPortion">
			<h1>Our App</h1>
      <nav class='navContainer'>
        <a href="index.html">Home</a> |
        <a href="pages/about.html">About</a> |
        <a href="pages/products.html">Products</a> |
        <a href="pages/contact_us.html">Contact Us</a>
      </nav>
      <div id='loginContainer' class='navContainer'>
      	<a href="#">Sign Up</a> |
        <a href="#">Login</a>
      </div>
    </header>
  </body>
</html>
```

## about.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>About</title>
    <link rel="stylesheet" href="./../styles/main.css">
  </head>
  <body>
  	<header id="topPortion">
      <h1>Our App</h1>
      <nav class='navContainer'>
        <a href="./../index.html">Home</a> |
        <a href="about.html">About</a> |
        <a href="products.html">Products</a> |
        <a href="contact_us.html">Contact Us</a>
      </nav>
      <div id='loginContainer' class='navContainer'>
        <a href="#">Sign Up</a> |
        <a href="#">Login</a>
      </div>
    </header>
    <div class="image_container">
      <img src="https://imgs.xkcd.com/comics/code_quality_2.png"/>
    </div>
  </body>
</html>
```

## AFTER BOOTSTRAP - index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Our App</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <link rel="stylesheet" href="styles/main.css">

  </head>
  <body>
		<header>
			
      <nav class="navContainer navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">My Blog</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/about.html">About</a>
            </li>          
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
          <li class="nav-item" id="loginContainer">
            <a class="nav-link" href="#">Sign Up</a>
            <a class="nav-link" href="#">Login</a>
          </li>
        </div>
      </nav>
    </header>

    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">Welcome to the best blog. Feel free to include a post of your own.</p>
      <hr class="my-4">
      <p>This blog showcases random musings, eventually we will give it a topic.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Sign up and write</a>
      </p>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-lg-6 col-md-8">
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
        </div>
      </div>

      <div class='row justify-content-md-center'>
        <div class="col-lg-6 col-md-8">
          <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h4 class="card-title">My Second Blog Post</h4>
              <p class="card-text">We are starting to get pretty good at this programming thing...</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </div>




    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
</html>
```
