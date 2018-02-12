import React, { Component } from 'react';

import Post from '../Posts/PostUser'

class PostsList extends Component { 
  render() {
    const { posts } = this.props; 
    return (
      <div> 
        {posts.map((post) => (
        	<Post key={post.postID} post={post} />
        ))}
      </div>
    )
  }
}

export default PostsList; 