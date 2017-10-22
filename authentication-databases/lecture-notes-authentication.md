 # Authentication
 
Authentication is a fancy word for user sign up and sign in ability on your app. Nearly every robust app has signup/signin features, as it is important to preserve a history for your users. It's important for the user (profiles, preferences, browsing history, etc.), and also important for you as the owner, as you can track valuable information and learn from your users. Authentication is an entire branch of programming, since security is a growing topic, the methods for signing up users and logging them in continues to get more advanced (because so do the hackers). The good news is that 90% of the heavy lifting on the side of security can be achieved through open source (free) frameworks. 

Today we are going to start by implementing about as naive of an authentication system as possible. This is done by design, for a few reasons: 
1. It's not so complex
2. Practical reasons (we are limited by time)
3. To show you how important it is that you give away your password only for trusted websites
4. To give you an appreciation for bcrypt and other solid auth libraries

One of the primary components to proper authentication is to have a proper hashing algorithm in place for your user's passwords. A hashing algorithm is a complex algorithm, secret in design, which will automatically transform a string (the password), into another string of jumbled up characters and numbers. These hashing algorithms are "one way" algorithms, meaning that the same string, let's say "mypassword" will aways generate the same hash, in this case "89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8". However, even if someone was to somehow get access to this hashing algorithm, if they were to input that hash, they would _not_ get back "mypassword." This is why we say that a hash is not an ‘encryption’ – it cannot be decrypted back to the original text (it is a ‘one-way’ cryptographic function, and is a fixed size for any size of source text). 

There are different underlying hashing functions, but SHA256 is the most common right now, and is the underlying hashing algorithm for bitcoin. Here you can play around with an actual SHA256 hashing algorithm: http://www.movable-type.co.uk/scripts/sha256.html

## Sending an HTTP request to login


We are going to use axios, a library that makes it easy to send HTTP requests. Here is the basic format: 
```
axios.post('/signin', {
               params: {
               }
             })
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
           })
 ```
 
This will send a POST request to our '/signin' route. You need also include some sort of params, in this case the email and password. The '.then' and '.catch' are callbacks which we briefly touched upon in the previous lesson in regards to the asynchronous nature of node. 

**Challenge**
Get our app to give a console.log of "SUCCESS!!" when we login with the hardcoded 'admin@gmail.com' and 'admin' for password. 

HINT: Take it in steps. When do we trigger this axios.post method? Let's first get a console.log triggering. Then let's confirm that we are successfully running our axios.post at the correct trigger point. Only then let's worry about getting the correct response back. 


Awesome!! We officially have a very naive implementation of logins. What else can we do to improve our auth? 

- Make it so that you can't have the same user sign up twice
- Make all three fields mandatory: name, email, password
- Give some basic restrictions to passwords, more than 5 characters at least
- Encrypt the passwords
