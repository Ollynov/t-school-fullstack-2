# Intro to CSS
CSS stands for Cascading Style Sheets. It tells the browser how to display HTML elements. In other words, this language allows you to style your webpage. CSS is quite nuanced but extremely powerful.

## What you will learn in this course
* Start styling your page with CSS
* Add inline styling
* Use different selectors
* Embed styling into your tag
* Link your html page to a style Sheet
* Use flexbox for responsive styling
* Use media queries to make your site look good on various devices

## Three ways to style a webpage

There are three ways to apply styling to a webpage:
* In-line styling
* Embedded styling
* Linked style Sheet

Depending on your needs and your webpage complexity, you will go for one of those three options.

## In-line Styling
Within an element, you can write some styling. This method is called in-line styling. It is pretty useful if you have small style changes you want to make quickly. Here is an example:

`<tag style="attribute: value;">content</tag>`

*Follow Along: add a `color` and `font-family` to the heading on your home page*

### Selectors
First, you need to select an element to apply some style on it. You can either directly select an element or select a class or an id.

#### Select an element
* elements/tags: `html`, `body`, `a`, `p`, `div`, etc.

You can directly apply style to an element. this will apply to all same elements. For example, if you select the anchor element `a`, the styling will apply to ALL `a` elements.

#### Select a Class
* classes (for items with shared characteristics)

You can give an element a class name. ONE class can be given to several elements. If select this class name then styling will apply to all elements that have that class name. Here is a example:
  * declare: `<tag class="photo menu-item event">content</tag>`
  * select: `.photo` `.menu-item` `.event`

### Select an id
An id works the same as a class. However ONE id can be given to ONLY ONE element.
* ids (for unique items)
  * declare: `<tag id="profile_picture">content</tag>`
  * select: `#profile_picture`

## Embedded
You can embed styling within the `<head>` tags of your webpage. It's useful when your webpage doesn't need much styling but you need to apply several properties to one element.  
```html
<head>
  <style type="text/css">
    selector(s) {
      property: value;
      property: value;
      property: value;
    }
  </style>
</head>
```
*Follow Along: add a style tag in the head of your index.html then move your inline-styling into it. Next, use a selector to style all the nav items at once.*


## Style Sheet
When your webpage needs a lot of styling, you might prefer to link a separate stylesheet to your html file. This will help you keep your workflow very organized. Here is how to link a stylesheet to your webpage:

```html
<head>
  <link rel="stylesheet" href="styles/main.css">
</head>
```


Pseudo Selectors: styling that is assigned to a state of a page element or specific subset of elements:

`a:hover { color: red;}` => Links will turn red when a mouse hovers over them

`p:first-child { background-color: gray;}` => The first paragraph element on a page will have a gray background color

`div:nth-child(3) { text-align: center; }` => Text in the 3rd div on the page will be centered

**Selectors based off of relationships**

- A E {}: Any E element that is a descendant of an A element (that is: a child, or a child of a child, etc.)
- A > E {}: Any E element that is a child of an A element
- E:first-child {}: Any E element that is the first child of its parent
- B + E {}: Any E element that is the next sibling of a B element (that is: the next child of the same parent)

_Exercise 1: link your stylesheet to your HTML pages and transfer all your styling into it. Now add a univeral style to your html like a background-color. Why might the styles not have been applied to your sub-pages?_

_Exercise 2: Go ahead and style up your page a bit. Add an h1 and whatever styling you might like. Some tips would be to change the font family (checkout Google fonts), and remove the default underline on the nav links, as well as the purple color for visited links._


# CSS Part 2
We are going to dig deeper into CSS and learn about responsive styling, how to easily position element on a webpage and cross-browser compatibility.

## What you will learn in this course
* Make responsive design
  * Media queries
* Position elements in your webpage
  * Flexbox
* Cross-Browser compatibility

## Responsive Styling:

Responsive styling enables you to customize how a page is displayed at different browser sizes. With media queries, you can set custom CSS for any browser with you’d like to target.

#### Typical Viewport Sizes

• Smartphones: 680 x 960 pixels

• Tablets: 768 x 1024 pixels

• Laptops: 1440 x 900 pixels

• Desktops: 1920 x 1080 pixels

#### Responsive media queries
To make your website responsive, developers use media queries. Thanks to that tool you will be able to ask the browser to apply a style given certain conditions. For example: IF my screen width is 700px or above THEN apply bigger font-size. Here is how you write it below:


  ```css
    @media screen and (min-width: 480px) and (max-width: 767px){
        body {
            background-color: lightgreen;
        }
    }
  ```
In this example: IF my screen has a width size between 480px and 767px THEN apply a background color of lightgreen, otherwise default to normal.

## Flexbox
Introduced by CSS3, Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices.

What you will read about flexbox is from [this guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). If you want to have a really deep understanding of flexbox, you can directly read it.

### Properties for the Parent element
#### Start with display Flex
To be able to use flexbox, you have to start by writing `display:flex` within the CSS parent element.

```css
.container {
  display: flex; /* or inline-flex */
}
```
#### Flex-direction
Flex direction property can display your items either in row or in column.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
#### Flex-wrap
Flex wrap is very useful when you have a lot of items within one element because it can push the items that don't fit on one line onto the next one.
```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
#### Justify-content
This property tells the browser how you want to align your items **horizontally** (on the left of your screen, centered, with space around each item etc..). This is very useful when implementing navigation menue.
```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
#### Align-items
This works as justify-content but it aligns your items **vertically**.
```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

### Main properties for the Child element
#### Order
You can change the order of which each items appears.
```css
.item {
  order: <integer>;
}
```

#### Align-self
If you want to align one item in a specific way, align self is the property you need.
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

*Exercise: complete up to level 16 in Flexbox Froggy.*

* [Flexbox Froggy](http://flexboxfroggy.com/)  

*Bonuse Exercise: If you have extra time try and beat FlexBox Defense!*

* [Flexbox Defense](http://www.flexboxdefense.com/)

#### Adding Flexbox to our website

Let's add some styling into our CSS file:

  ```css
#topPortion {
	display: flex;
	width: 90%;
}

#loginContainer {
	display: flex;
	width: 200px;
}

  ```
  

  *Exercise: update your HTML to include the CSS ids above, but you may have to add/edit them to make your nav look good and stay responsive*
  
  *Exercise 2: make the Nav bar look good. Then update your other two html files to use the same styling.*


## BONUS

Go on [exercises.md](https://github.ibm.com/Aljosha-Novakovic/tschool_fullstack/blob/master/CSS-Bootstrap/exercises.md), we are going to do:

1) Box Positioning

Bonus 1: Computer Gallery

Bonus 2: Astronaut Challenge


### Cross-Browser Compatibility
Making sure a site displays properly across different platforms can be a major headache for developers. To mitigate this, we test on multiple devices/browsers and use CSS browser prefixes to add support for CSS features before they are natively supported by the browser.

Prefixes:  
Android: `-webkit-`  
Chrome: `-webkit-`  
Firefox: `-moz-`  
Internet Explorer: `-ms-`  
iOS: `-webkit-`

[This css auto-prefixer tool can make your life easier.](http://pleeease.io/play/)


*Exercise: run your css through the auto-prefixer, save the new CSS and then view in another browser*

#### Head Meta-tags:

Add this to the head of your file to let your mobile browser know your site is optimized for mobile:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

