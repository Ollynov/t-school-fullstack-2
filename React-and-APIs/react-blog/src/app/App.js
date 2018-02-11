import React, { Component } from 'react';
import './styles/styles.css';

// APP COMPONENTS 
import Nav from './components/Nav/Nav'
import Banner from './components/Nav/Banner'
import PostList from './components/PostList/PostListProps' 
import WritePost from './components/WritePost/WritePost'
import Profile from './components/Profile/Profile'

// SERVICES
import { getPosts } from '../services/posts'

class App extends Component {
  state = {
    user: {
      name: 'Austin Riedel', 
      email: 'Austin.Riedel@ibm.com', 
      ibmID: '0J5916897'
    },
    renderPostInterface: true, 
    posts: [], 
  }

  componentWillMount = () => {
    getPosts()
      .then((response) => {
        let posts = []; 
        if (response && Array.isArray(response)) {
          posts = response.reverse(); 
        }
        this.setState({ posts: posts });
      })
      .catch((err) => {
        console.log('ERROR: ', err); 
      })
  }

  togglePostInterface = () => {
    let { renderPostInterface } = this.state; 
    this.setState({ renderPostInterface: !renderPostInterface }); 
  }

  handleNewPost = (postObject) => {
    const { posts } = this.state; 
    let newPosts = posts.slice(); 
    newPosts.push(postObject); 
    console.log(postObject); 
    this.setState({ posts: newPosts }); 
  }

  render() {
    const { user, posts, renderPostInterface } = this.state;  

    return (
      <div className="App container-fluid" style={{margin: 0, padding: 0}}>
        <Nav />
        <Banner />
        <div className="row" style={{marginTop: 0, paddingTop: 0}}>
          <div className="col-4"> 
            <Profile 
              user={user}
              renderPostInterface={renderPostInterface}
              handleToggle={this.togglePostInterface}
            />
            <button className="btn btn-primary" onClick={this.togglePostInterface}>Write Post </button>
            <WritePost 
              user={user} 
              renderPostInterface={renderPostInterface} 
              handleNewPost={this.handleNewPost} 
            />
          </div>
          <div className="col-8">
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;