import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='copy'>
        {' '}
        <span dangerouslySetInnerHTML={{ __html: '&copy;' }}></span> Made By
        Anish Chand. 2020.
      </div>
      <div className='logo'></div>
    </div>
  );
};
export default Footer;
