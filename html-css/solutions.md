# Solutions
If you get stuck, you can check the answers here. Keep in mind that there can be several ways to get to the same result. Therefore there might be some difference between your code and the code below but it doesn't necessarily mean that your code is wrong.

## Headings

### Exercice 1

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>London</h1>

    <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>

  </body>
</html>
```

### Exercice 2

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>London</h1>
    <hr>
    <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>

  </body>
</html>

```

### Exercice 3

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6>

  </body>
</html>
```

## Paragraphs

## Exercice 2

```html
<!DOCTYPE html>
<html>
  <body>

    <h1>This is a Heading

    <p>This is a paragraph.
    <p>This is a paragraph.
    <p>This is a paragraph.

  </body>
</html>
```


## Link

```html
<!DOCTYPE html>
<html>
<body>

<a href="https://www.w3schools.com">Visit our HTML tutorial.</a>

</body>
</html>
```
## Image
```html
<!DOCTYPE html>
<html>
<body>

<img src="pic_mountain.jpg" style="width:304px;height:228px;">

</body>
</html>
```

## List

```html
<!DOCTYPE html>
<html>
<body>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

</body>
</html>

```

## Form

```html
<!DOCTYPE html>
<html>
<body>

<form>
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
</form>

</body>
</html>
```






# Solutions CSS Part I
If you get stuck, you can check the answers here. Keep in mind that there can be several ways to get to the same result. Therefore there might be some difference between your code and the code below but it doesn't necessarily mean that your code is wrong.

## Style

```html
<!DOCTYPE html>
<html>
  <body>

  <p style="font-family:courier">This is a paragraph.</p>

  </body>
</html>

```

## Embedded styling
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color:lightgrey;font-family:courier}
h1   {color:blue}
p    {color:black}
</style>
</head>
<body>

<h1>This is a Heading</h1>

<p>This is a paragraph.</p>

</body>
</html>
```



## Classes

```html
<!DOCTYPE html>
<html>
<head>
<style>
.special {
    color:red;
}
</style>
</head>
<body>

<h1>My <span class="special">Important</span> Heading</h1>

<p class="special">My important paragraph.</p>

</body>
</html>
```
## id
```html
<!DOCTYPE html>
<html>
<head>
<style>
p#special {
    background-color:black;
    color:white;
}
</style>
</head>
<body>

<h1>This is a heading</h1>

<p>This is a paragraph.</p>
<p>This is also paragraph.</p>
<p id="special">I want to be a special paragraph!</p>

</body>
</html>
```

# Solutions CSS Part II

## Astronaut

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Exercise: Lost Astronaut</title>
    <style>
        #greeting {
          background: slategray;
          border: 2px solid black;
          padding: 5px;
          width: 262px;
        }
        #astronaut {
            width:45px;
            position:absolute;
            left:129px;
            top:50px;
            z-index:0;
        }
        #spaceship {
            z-index:1;
            position: absolute;    
        }
        #landing_pad {
          z-index:-1;
          position: absolute;
          width: 500px;
          bottom: 0px;
          right: 0px;
        }

        #ship{
            position:absolute;
            left:850px;
            bottom:300px;
        }
      </style>
  </head>
  <body>
    <div id="greeting">
      <p>Hey CSS cadet! Rescue the astronaut!</p>
    </div>
    <img id="spaceship" src="../assets/spaceship.png" width="300">
    <img id="astronaut" src="https://d13yacurqjgara.cloudfront.net/users/182160/screenshots/725814/ss-astronaut.png">
    <img id="landing_pad" src="http://www.collectspace.com/review/spacex_spaceportdrone04-lg.jpg" alt="">
  </body>
</html>

```

## Flexbox Froggy

### Level 1

```css
#pond {
  display: flex;

justify-content:flex-end
}
```

### Level 2
```css
#pond {
  display: flex;

justify-content:center;
}
```
### Level 3
```css
#pond {
  display: flex;

justify-content:space-around
}
```
### Level 4
```css
#pond {
  display: flex;

justify-content:space-between;
}
```

### Level 5
```css
#pond {
  display: flex;

align-items:flex-end;
}
```
### Level 6
```css
#pond {
  display: flex;
justify-content:center;
align-items:center;

}
```

### Level 7
```css
#pond {
  display: flex;
justify-content:space-around;
align-items:flex-end;

}
```
### Level 8
```css
#pond {
  display: flex;
flex-direction:row-reverse;
}
```
### Level 9
```css
#pond {
  display: flex;
flex-direction:column;

}
```
### Level 10
```css
#pond {
  display: flex;
flex-direction:row-reverse;
justify-content:flex-end;
}
```
### Level 11
```css
#pond {
  display: flex;
flex-direction: column;
justify-content:flex-end;
}
```
### Level 12
```css
#pond {
  display: flex;
justify-content:space-between;
flex-direction:column-reverse;

}
```
### Level 13
```css
#pond {
  display: flex;
justify-content:center;
flex-direction:row-reverse;
align-items:flex-end;

}
```
### Level 14
```css
#pond {
  display: flex;
}

.yellow {
order:1;
}
```
### Level 15
```css
#pond {
  display: flex;
}

.red {
order:-1

}
```
### Level 16
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
align-self:flex-end;

}

```

## Flexbox Defense

### Level 1
```css
.tower-group-1 {
display: flex;

justify-content:center;

}
```

### Level 2
```css
.tower-group-1 {
display: flex;

justify-content:flex-end;

}
.tower-group-2 {
display: flex;

justify-content:center;

}
.tower-group-3 {
display: flex;

justify-content:flex-end;

}
```
###  Level 3
```css
.tower-group-1 {
display: flex;

justify-content:center;

}
.tower-group-2 {
display: flex;

justify-content:space-between;

}
```
### Level 4
```css
.tower-group-1 {
display: flex;

align-items:flex-end;

}
.tower-group-2 {
display: flex;

align-items:flex-end;

}
```
### Level 5
```css
.tower-group-1 {
display: flex;

justify-content:space-around;

align-items:flex-end;

}
.tower-group-2 {
display: flex;

justify-content:center;

}
.tower-group-3 {
display: flex;

justify-content:center;

align-items:center;

}
```
### Level 6
```css
.tower-group-1 {
display: flex;
justify-content:space-between;
align-items:center;
}
```

### Level 7
```css
.tower-group-1 {
display: flex;
flex-direction:column;
}
.tower-group-2 {
display: flex;
flex-direction:column;
}

```
### Level 8
```css
.tower-group-1 {
display: flex;
flex-direction:column;
}
.tower-group-2 {
display: flex;
justify-content:center;
flex-direction:column;
align-items:center;
}
```
### Level 9
```css
.tower-group-1 {
display: flex;
justify-content:space-around;
flex-direction:row-reverse;
}
.tower-group-2 {
display: flex;
justify-content:space-around;
align-items:center;
flex-direction:row-reverse;
}
```
### Level 10
```css
.tower-group-1 {
display: flex;
justify-content:space-around;
}
.tower-1-1 {
}
.tower-1-2 {
order:1;
}
.tower-1-3 {
}
.tower-group-2 {
display: flex;
justify-content:space-around;
}
.tower-2-1 {
}
.tower-2-2 {
order:-1;
}
.tower-2-3 {
}
```

### Level 11
```css
.tower-group-1 {
display: flex;
justify-content:space-between;
}
.tower-1-1 {
align-self:flex-end;
}
.tower-1-2 {
}
.tower-1-3 {
align-self:flex-end;
}
.tower-1-4 {
}
```

### Level 12
```css
.tower-group-1 {
display: flex;
justify-content:space-between;
align-items:center;
}
.tower-1-1 {
align-self:flex-start;
}
.tower-1-2 {
}
.tower-1-3 {
order:1;
}
.tower-1-4 {
}
.tower-1-5 {
order:2;
align-self:flex-end;
}
```

