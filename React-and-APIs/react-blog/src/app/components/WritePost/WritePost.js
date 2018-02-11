import React, { Component } from 'react';
// import { savePost } from '../../../services/posts'
import { savePost, savePostWithNLU } from '../../../services/posts'
import { getNLUAnalysis } from '../../../services/nlu'

import shortid from 'shortid'

class WritePost extends Component { 
  state = {
    postBody: `Elon Musk, the entrepreneur behind Tesla and SpaceX, put on a stunning show Tuesday with the inaugural launch of SpaceX's Falcon Heavy, which became the most powerful operational rocket in the world.`,
    entities: [], 
  }

  handleChangeBody = (event) => {
  	const postBody = event.target.value; 
  	this.setState({ postBody }); 
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    const { user, handlePost } = this.props; 
    const { postBody } = this.state; 
    if (!postBody) {
      return; 
    }

    let postDate = new Date(); 
    postDate = postDate.toString(); 

    const postUser = user;  
    const postID = shortid.generate(); 

    const postObject = {
      postID, 
      postDate, 
      postUser, 
      postBody,
    }

    savePost(postObject)
      .then((response) => {
        handlePost(postObject); 
      })
      .catch((err) => {
        console.log('ERROR: ', err); 
      })

    this.setState({ postBody: '' })
  }

  render() {
  	const { renderPostInterface } = this.props; 
    let { postBody, entities } = this.state; 
    

    // HANDLE NO SHOW
    if (!renderPostInterface) {
    	return (
    		<div> 
    		</div>
    	)
    }

    return (
      <div className="card" style={{margin: 15}}>
      	<div className="card-body"> 
		      <form onSubmit={this.handleSubmit}>
		        <div className="form-group">
		          <div style={{display: 'block', textAlign: 'left'}}>
		            <label htmlFor="postBody" style={{margin: 7}}>Write Your Blog Post Here</label>
		            <textarea type="text" onChange={this.handleChangeBody} value={postBody} id="postBody" className="form-control"/>
                <button type="submit" className="btn btn-primary" style={{ width: '10%', marginLeft: '85%', marginTop: 15 }}>Post</button>
		          </div>
		        </div>
		      </form>
	      </div>
      </div>
    )
  }
}

export default WritePost; 