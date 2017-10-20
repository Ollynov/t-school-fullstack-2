# APIs

## What you'll learn in this course
* Understand the role of an API
* Learn about environment variables
* Learn how to create a custom Rails route
* Learn how to make an HTTP request with an API key
* Understand the JSON data format
* Learn how to make an AJAX request
* Understand the asynchronous nature of JavaScript


### The role of an API
Public APIs are designed to allow external clients to access data on a server. Clients, in this case, can be user devices or other web servers. Large companies like the New York Times offer access to items like old articles through their API. Some APIs are completely open while others require authentication. A common form of authentication is an API key - which usually must be obtained through registration and/or payment. Every API has its own set of rules of interaction that a developer must learn by reading the API's documentation (the quality of documentation can vary wildly!).

Today we'll be using Dark Sky's weather API.

Visit [Dark Sky](https://darksky.net/dev/) and sign up for an account. It's completely free up to 1000 requests per day.

Now that you've gotten a unique API key, let's add that to your rails project.

### Environment Variables
Environment variable are usually small pieces of configuration data that you want accessible everywhere (globally) within your application. Often, these are API keys, passwords, email addresses and URLs. This is a good DRY convention and helps developers centralize important information in a single place.


### Making an HTTP request
Let's step through the code above in our console to learn about the various parts of an HTTP (Hyper Text Transport Protocol) request.
  * URI
  * host
  * port
  * ssl

### JSON data format
JSON is composed of key-value pairs much like Ruby hashes and JavaScript objects. It is currently the de facto way of transferring pieces of data across the web and has largely replaced XML. How can we explore that object in our browser? Let's use the API endpoint we just made!

### AJAX Request
How do we get the data off our server an into the browser without going directly to the URL and getting shown a bunch of jumbled text? We have to use JavaScript! JQuery provides us with an easy interface for making requests to our server - AJAX (Asynchronous Javascript and XML). Paste the following code into your index.html.erb file for your home view (landing page):

```js
const productSchoolLat = "37.796465";
const productSchoolLng = "-122.402492";

$.ajax({
  url: 'api/v1/weather',
  type: 'GET',
  data: { lat: productSchoolLat, lng: productSchoolLng } ,
  contentType: 'application/json; charset=utf-8',
  success: function (response) {
    console.log(response);
  },
  error: function (error) {
    console.log(error);
  }
});
```


**Exercise 1**
Inside of our success function in the above AJAX object, we have access to the data that was sent from our server. Instead of just console logging our result, let's show it to our users. Use JQuery to select an element (maybe `.title-2`) and update its text to be either the current weather description, the current temperature, or a forecast.

**Exercise 2**
Use the HTML5 [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) to get the user's current location. Send that the latitude and longitude your server using the AJAX data property. You can access the browser's HTML5 geolocation API using JavaScript with `navigator.geolocation.getCurrentPosition((location) => {console.log(location)})`
