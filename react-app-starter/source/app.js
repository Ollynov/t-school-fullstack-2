import React, { Component } from 'react'
import PostList from './app/lib/PostList' 

// APP COMPONENTS 
import NavigationBar from './app/components/NavigationBar'
import Header from './app/components/Header'
import Profile from './app/components/Profile'
import PostForm from './app/components/PostForm'

class App extends Component {
  state = {
    useLocalPosts: true
  }

  render() {
    let { useLocalPosts } = this.state; 

    return (
      <div className="container-fluid" style={{margin: 0, padding: 0}}>
        <NavigationBar />
        <Header />
        <div className="row" style={{marginTop: 0, paddingTop: 0}}>
          <div className="col-4"> 
            <Profile />
            <PostForm />
          </div>
          <div className="col-8">
            <PostList useLocalPosts={useLocalPosts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;