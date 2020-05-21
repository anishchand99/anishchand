import React from 'react';
import './Home.css';

const Home = ({ property }) => {
  return (
    <div className='home'>
      <div className='header'>
        Hi, I am <span>Anish Chand</span>.
      </div>
      <div className='header'> I am a Computer Science Undergrad.</div>
      <div className='header'>An Undergraduate Researcher.</div>
      <div className='header'>
        I love <span className='animationText'></span>
      </div>
    </div>
  );
};
export default Home;
