import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
  changeRoutes = (route) => {
    this.props.onRouteChange(route);
  };
  render() {
    return (
      <div className='navBar'>
        <span onClick={() => this.changeRoutes('home')}>HOME </span>
        <span onClick={() => this.changeRoutes('resume')}>ABOUT</span>
        <span onClick={() => this.changeRoutes('blog')}>BLOG</span>
        <span onClick={() => this.changeRoutes('projects')}>PROJECTS</span>
        <span onClick={() => this.changeRoutes('contact')}>CONTACT</span>
      </div>
    );
  }
}
export default Navbar;
