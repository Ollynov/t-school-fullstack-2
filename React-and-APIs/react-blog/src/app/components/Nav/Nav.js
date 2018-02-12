import React from 'react';

const Nav = () => (
  <nav className="navContainer navbar navbar-expand-lg navbar-light bg-faded">
    <a className="navbar-brand" href="#Click" disabled>My Blog</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/home" disabled>Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about" disabled>About</a>
        </li>          
        <li className="nav-item">
          <a className="nav-link" href="#Click" disabled>Contact Me</a>
        </li>
      </ul>
      <li className="nav-item" id="loginContainer">
        <a className="nav-link" href="#Click" data-toggle="modal" data-target="#signupModal" disabled>Sign Up</a>
        <a id="signinBtnOrig" className="nav-link" href="#Click" data-toggle="modal" data-target="#signinModal" disabled>Login</a>
      </li>
    </div>
  </nav>
)

export default Nav; 