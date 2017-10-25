import React, { Component } from 'react';
import { getPosts } from './services'

import Post from '../components/Post'

const LOCAL_POSTS = [
	{
    postID: '120498-AFH-af8yaf',
		postBody: 'This is the first post on the blog that was written by your professor Austin Riedel.'
	}
]

class PostList extends Component { 
  state = {
    posts: LOCAL_POSTS
  }

  componentWillMount = () => {
  	const { useLocalPosts } = this.props; 
  	if (!useLocalPosts) {
	  	getPosts()
	  		.then((response) => {
	  			console.log(response); 
	  			this.setState({ posts: response });
	  		})
	  		.catch((err) => {
	  			console.log('ERROR: ', err); 
	  		})
  	}
  }

  render() {
    let { posts } = this.state; 
    return (
      <div> 
        <h2>Posts Updated</h2>
        {posts.map((post) => (
        	<Post key={post.postID} post={post} />
        ))}
      </div>
    )
  }
}

export default PostList; 