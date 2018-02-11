import React, { Component } from 'react';

class Post extends Component {
	state = {
		expanded: false, 
	}

	toggleExpand = () => {
		let { expanded } = this.state; 
		this.setState({ expanded: !expanded }); 
	}

	render() {
		const { post } = this.props; 
		const { postUser, postBody } = post; 
		let { expanded } = this.state; 

		let displayBody = expanded ? postBody : postBody.slice(0, 100) + '...'; 

		return (
			<div className='row justify-content-md-center'>
			  <div className="col-lg-10 col-md-8">
			    <div className="card text-center">
			      <div className="card-header">
			        Featured
			      </div>
			      <div className="card-body" style={{textAlign: 'left'}}>
			        <h4 className="card-title">{post.postUser.name}</h4>
			        <p className="card-text">{displayBody}</p>
			        <button className="btn btn-primary" onClick={this.toggleExpand}>Read More</button>
			      </div>
			      <div className="card-footer text-muted">
			        2 days ago
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Post; 