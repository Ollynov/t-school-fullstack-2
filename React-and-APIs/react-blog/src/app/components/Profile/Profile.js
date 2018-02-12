import React, { Component } from 'react';

class Profile extends Component { 
  render() {
  	const { user } = this.props; 
    let userImageSrc = `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`
    if (user.ibmID && user.email) {
      userImageSrc = `https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/${user.email}?def=avatar`;
    }

    return (
      <div style={{minHeight: 300}}>
        <img style={{borderRadius: '50%', height: 200}} src={userImageSrc} />
        <br/>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
      </div>
    )
  }
}

export default Profile; 