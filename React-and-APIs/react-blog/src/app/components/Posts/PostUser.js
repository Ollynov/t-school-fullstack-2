import React, { Component } from 'react';
const BLUE_PAGES_PROFILE = 'https://w3.ibm.com/bluepages/profile.html?uid='; 

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

		let displayBody = expanded ? postBody : postBody.slice(0, 150) + '...'; 
		let userImageComponent = <div style={{display: 'none'}}></div>
		// console.log('postUser', postUser)
		if (postUser.ibmID) {
		// if (true) {
			const contributorIDImage = `https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/${postUser.email}?def=avatar`;
			userImageComponent = <img style={{borderRadius: '50%', height: 50}} src={contributorIDImage} />
		}

		return (
			<div className='row justify-content-md-center'>
			  <div className="col-lg-10 col-md-8">
			    <div className="card">
			      <div className="card-body" style={{textAlign: 'left'}}>
			      	<div style={{display: 'flex-box', marginBottom: 15}}>
			      		{userImageComponent}
				        <h4 className="card-title" style={{display: 'inline', marginLeft: 25, marginTop: 5}}>{post.postUser.name}</h4>
			      	</div>
			        <p className="card-text">{displayBody}</p>
			        <button className="btn btn-primary" onClick={this.toggleExpand}>Read More</button>
			      </div>
			      <div className="card-footer text-muted">
			        {post.postDate}
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Post; 