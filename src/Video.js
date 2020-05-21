import React, { Component } from 'react';
import './Video.css';
class Video extends Component {
  render() {
    const { property } = this.props;
    return (
      <div className='background-video'>
        <video id='vid' autoPlay muted loop>
          {console.log(property.videoUrl)}
          <source src={property.videoUrl} type='video/mp4' />
          <source src={property.videoUrl} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Video;
