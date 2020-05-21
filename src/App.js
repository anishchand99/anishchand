import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Box from './Components/Box';
import Name from './Components/Name';
import SliderNumber from './Components/SliderNumber';
import Footer from './Components/Footer';
import Video from './Video';
import { list } from './list';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Particles from 'react-particles-js';
import { resumeConstant } from './resume-constant';
import { blogConstant } from './blog-constant';
import { contactConstant } from './contact-constant';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import profile from './images/profile.jpg';

const initialState = {
  route: 'home',
  properties: list.properties,
  property: list.properties[0],
};
const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#4b027c',
    },
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onNextPressed = () => {
    let newIndex = this.state.property.index + 1;
    if (newIndex === list.properties.length) {
      newIndex = 0;
    }
    this.setState({ property: list.properties[newIndex] });
  };
  onPrevPressed = () => {
    let newIndex = this.state.property.index - 1;
    if (newIndex < 0) {
      newIndex = list.properties.length - 1;
    }
    this.setState({ property: list.properties[newIndex] });
  };
  render() {
    const { property } = this.state;
    return (
      <div className='App'>
        <div className='body-container'>
          {/* left side of the page */}
          <div className='left'>
            <div className='navbar-container'>
              {' '}
              <Navbar onRouteChange={this.onRouteChange} />
            </div>
            <div className='middle'>
              {this.state.route === 'home' ? (
                <div>
                  <Particles className='particles' params={particleOptions} />
                  <div className='home-container'>
                    <Home />
                  </div>
                </div>
              ) : this.state.route === 'resume' ? (
                <div className='resume-container'>
                  <Resume display={resumeConstant[0]} />
                </div>
              ) : this.state.route === 'projects' ? (
                <div className='project-container'>
                  <SliderNumber
                    className='slider'
                    NextPressed={this.onNextPressed}
                    PrevPressed={this.onPrevPressed}
                  />
                  <Name className='name' property={property} />
                </div>
              ) : this.state.route === 'blog' ? (
                <Blog display={blogConstant[0]} />
              ) : (
                <Contact display={contactConstant[0]} />
              )}
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </div>{' '}
          {/* end left side of the page */}
          {/* right side of the page */}
          <div className='right'>
            {this.state.route === 'home' ? (
              <div className='rightHome'>
                <div className='home-container'>
                  <img src={profile} alt='profile' />
                  <div className='intro'>
                    I am a computer science undergraduate at the University of
                    New Orleans. I am also an undergraduate research assitant
                    and my current research work falls under web security. I am
                    experienced in object-oriented programming. I often find
                    myself building web apps using HTML, CSS and JavaScript. I
                    have experience in Full Stack Development, object-oriented
                    programming and problem-solving. I am looking for a
                    full-time role for growing my skills further and gaining
                    industry experience.
                  </div>
                </div>
              </div>
            ) : this.state.route === 'resume' ? (
              <div className='rightResume'>
                <div className='resume-container'>
                  <Resume display={resumeConstant[1]} />
                </div>
              </div>
            ) : this.state.route === 'projects' ? (
              <div className='project-container'>
                <div className='video'>
                  {' '}
                  <Video property={property} />
                </div>
                <div className='upper'>
                  <SliderNumber
                    NextPressed={this.onNextPressed}
                    PrevPressed={this.onPrevPressed}
                  />
                  <Box property={property} />
                </div>
              </div>
            ) : this.state.route === 'blog' ? (
              <div className='rightBlog'>
                <Particles className='particlesBlog' params={particleOptions} />
                <Blog display={blogConstant[1]} />
              </div>
            ) : (
              <div className='rightContact'>
                <Particles className='particlesBlog' params={particleOptions} />
                <Contact display={contactConstant[1]} />
              </div>
            )}
          </div>{' '}
          {/* end right side of the page */}
        </div>
      </div>
    );
  }
}

export default App;
