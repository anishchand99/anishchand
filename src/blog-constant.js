import React from 'react';
export const blogConstant = [
  <div className='blog'>
    <div className='article-container'>
      <div className='carousel'>
        <div className='article'>
          <article>
            <a
              href={process.env.PUBLIC_URL + '/blog/post1/post1.html'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3 className='blog-title'>
                Generating SSH Keys For Passwordless Login
              </h3>
              <small> Posted by Anish Chand. 6 Feb. 2020</small>
              <p>Generate SSH Keys via terminal</p>
              <u>Read More...</u>
            </a>
            <hr />
          </article>
          <article>
            <a
              href={process.env.PUBLIC_URL + '/blog/post2/post2.html'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3 className='blog-title'>
                Creating a Simple Background Color Generator App
              </h3>
              <small> Posted by Anish Chand. 29 Feb. 2020</small>
              <p>Generate background colors manipulating the DOM</p>
              <u>Read More...</u>
            </a>
            <hr />
          </article>
          <article>
            <a
              href={process.env.PUBLIC_URL + '/blog/post3/post3.html'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3 className='blog-title'>
                Creating a Trivia App Using OpenTrivia DB API
              </h3>
              <small> Posted by Anish Chand. 23 Mar. 2020</small>
              <p>Generate trivia questions using external API</p>
              <u>Read More...</u>
            </a>
            <hr />
          </article>
          <article>
            <a
              href={process.env.PUBLIC_URL + '/blog/post4/post4.html'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3 className='blog-title'>
                Creating a Job Application Tracker in PERN stack
              </h3>
              <small> Posted by Anish Chand. 23 Mar. 2020</small>
              <p>Generate trivia questions using external API</p>
              <u>Read More...</u>
            </a>
            <hr />
          </article>
        </div>
      </div>
    </div>
  </div>,

  // right side

  <div className='blog'>
    <div className='blog-header'>Welcome to my Blog!</div>
    <div className='blog-header'>Feel free to check out any of my posts!</div>
  </div>,
];
