import React, { Component } from 'react';
import { getPosts } from '../../_lib/services'

import Post from './PostUser'

class PostsList extends Component { 
  state = {
    posts: []
  }

  componentWillMount = () => {
  	getPosts()
  		.then((response) => {
  			console.log(response); 
  			this.setState({ posts: response });
  		})
  		.catch((err) => {
  			console.log('ERROR: ', err); 
  		})
  }

  render() {
    let { posts } = this.state; 
    return (
      <div> 
        <h2>Posts</h2>
        {posts.map((post) => (
        	<Post key={post.postID} post={post} />
        ))}
      </div>
    )
  }
}

export default PostsList; 