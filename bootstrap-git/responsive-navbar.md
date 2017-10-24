## Let's Build a Responsive Navbar

To get a true appreciation for the power of bootstrap, let's first go ahead and create our own navbar for our app. We are now starting to build out the code that we will actually be using for our final blog.

Go ahead and replace your main.css stylesheet with the following. Feel free to alter the css with your own touch, especially on colors, font, etc. 

```css
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

body {
	background-color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

h1 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
}

/* NAV STYLES
*/

.navContainer a {
	text-decoration: none;   
	border-bottom: 2px solid transparent;    
  transition: 0.5s ease;
  color: rgb(91, 91, 91);
}

.navContainer a:hover {
  border-bottom: 2px solid rgb(1, 209, 178);
  color: rgb(0, 0, 0);
}

.navContainer a:visited {
  color: rgb(91, 91, 91);
}

nav {
	display: flex;
	width: 400px;
	justify-content: space-between;
	flex-wrap: wrap;
}

/*END OF NAV STYLES
*/

/* TOP PORTION
*/
#topPortion {
	display: flex;
	width: 90%;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: baseline;
	margin: auto;
}

#loginContainer {
	display: flex;
	width: 200px;
	justify-content: space-between;
	flex-wrap: wrap;
}

/* END OF TOP PORTION
*/
```
