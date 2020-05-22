import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Box.css';

class Box extends Component {
  componentDidMount() {
    const videoPlayer = document.querySelector('.videoPlayer');
    const play = document.querySelector('.play');
    play.addEventListener('click', () => {
      videoPlayer.classList.add('reveal');
    });
  }
  hideVideo = () => {
    const videoPlayer = document.querySelector('.videoPlayer');
    videoPlayer.classList.remove('reveal');
  };

  render() {
    const { property } = this.props;
    return (
      <div className='box-container'>
        <div className='card'>
          <div className='front'>
            <div className='image-container'>
              <div className='flip-message'>
                Hover to Flip the Card for Details
              </div>

              <img className='image' src={property.image} alt='project' />
            </div>
            <div className='text'>{property.imageDescription}</div>
          </div>
          <div className='back'>
            <div className='image-container'>
              <div>{property.backDescription}</div>
              <div className='buttons'>
                <a
                  href={property.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button>Link to Live Site</button>
                </a>
                <a
                  href={property.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button>Link to Github</button>
                </a>
                <button className='play'>
                  <ReactPlayer
                    onMouseLeave={() => {
                      this.hideVideo();
                    }}
                    className='videoPlayer'
                    url={property.videoUrl}
                    playing
                    width='500px'
                    height='500px'
                    controls
                  />
                  See Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Box;
