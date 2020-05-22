import React from 'react';
import github from './images/github-logo.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png';

export const contactConstant = [
  <div className='contact'>
    <div className='displayFlex'>
      <div className='logo'>
        <a
          href='https://github.com/anishchand99'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='logo' className='logoImage' src={github} />
        </a>
      </div>
      <div className='details'>
        <a
          href='https://github.com/anishchand99'
          target='_blank'
          rel='noopener noreferrer'
        >
          github.com/anishchand99
        </a>
      </div>
    </div>
    <div className='displayFlex'>
      <div className='logo'>
        <a
          href='https://www.linkedin.com/in/anish-chand/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='logo' className='logoImage' src={linkedin} />
        </a>
      </div>
      <div className='details'>
        {' '}
        <a
          href='https://www.linkedin.com/in/anish-chand/'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin.com/in/anish-chand
        </a>
      </div>
    </div>
    <div className='displayFlex'>
      <div className='logo'>
        <img alt='logo' className='logoImage' src={email} />
      </div>
      <div className='details'>anishchand99@gmail.com</div>
    </div>
  </div>,

  // right side
  <div className='contact'>
    <div className='contact-header'>Get in touch with me!</div>
    <div className='contact-header'>
      I am available through any of these ways!
    </div>
  </div>,
];
