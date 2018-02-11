README.md# Session - React App 
We will be implementing the pre-existing blog utilizing the React library. To refactor the application into React, we will be creating React components based on the patterns from the Introduction to React session. 

To implement this application, we will be following allow the directory that is provided here working on individual components and importing those components into the whole application. 

## Section 1
### Navigation Bar 

Working File / Directory:
**src/app/components/Nav/Nav.js**

Let's start by implementing the existing Navigation Bar into it's own React component. We should create a simple, **functional** React component encapsulating the HTML code from the app. 


## Blog Banner

Working File / Directory:
**src/app/components/Nav/Banner.js**

Let's do the same exercise with the HTML for the blog's header banner. 

## Blog Post 

Working File / Directory:
**src/app/components/Posts/Post.js**

What's a blog without any posts? We need to implement a component for rendering individual blog posts. If you examine the current file, you can see that we have a **class** component that is rendering only an empty `<div></div>`. Let's change this so that we can see the postBody and postDate for each Post. 

*Hint: This might be a good time to use* `props`

```javascript 
this.props.postBody
this.props.postDate

```

## Blog Post P2 - Expandable 

Working File / Directory:
**src/app/components/Posts/Post.js**

There was a reason that we wanted to use a class component for the Post. We will be adding some local state to each Post to allow users to toggle each Post between showing the entire postBody and a shortened tagline for each postBody. 

*Hint: We will need some an event handler and a clickable element. We also need to write some code to give us the shortened version of the postBody.*


## User Profile

Working File / Directory:
**src/app/App.js**
**src/app/components/Profile/Profile.js**

Let's start personalizing this blog. The Profile component is similar to the original Post component, it is currently returning an empty `<div></div>`. Let's create some state for username in the `App.js` component and pass this profile. Once we have that, let's display the username in the Profile component. 


## User Profile - Picture 

Working File / Directory:
**src/app/App.js**
**src/app/components/Profile/Profile.js**

We're going to keep working on the User Profile, adding additional user information to display in the Profile component. Let's add the user object to the App.js state. To really make this interesting, make sure that you're logged into the IBM VPN and access Blue Pages and get your IBM serial number and your email. Pass this state into the Profile component and see if you can add an image of yourself to your profile. Remember how we embedded the API Key into the weather request earlier this week. 

*Hint:* `https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/(IBM_SERIAL_NUMBER)?def=avatar`

```javascript 
state = {
	user: {
		name: 'Austin Riedel',
		email: 'Austin.Riedel@ibm.com', 
		ibmID: 'xxxxxxxxx'
	}
}
```

## User Profile - Post Form 

Working File / Directory:
**src/app/components/PostForm/PostForm.js**

Now the interesting part. We want to create a way for users to submit posts to the blog. Using what we learned from the fundamentals section, add a form that allows users to write their own blog post and then print an alert / console.log when the user submits the form. 



## User Profile - Post Form Connected

Working File / Directory:
**src/app/App.js**
**src/app/components/PostForm/PostForm.js**

First things first, go to `App.js` and change the useLocalPosts value in state to `true`. We will explore the affect that this has on our application in later steps. 

We don't just want to use an alert when someone submits a new post, we want to store this blog post in our database. Call the imported `savePost` function with the postBody and the user object as parameters. What does everyone want to put for their first blog post?


## Post List

Working File / Directory:
**src/app/lib/PostList.js**

I know that I said that we aren't going to look in this directory, but now it's time to break down the Post List. We're going to walk through component lifecycles and understanding the role fetch and requests play in our system. 


### Additional Features 
1. Add a way to refresh the blog posts without refreshing the page. 
2. Refactor the Post component to show the user picture and name from the person that provided the post. 




