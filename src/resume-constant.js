import React from 'react';
import github from './images/github-logo.png';
import linkedin from './images/linkedin.png';
export const resumeConstant = [
  <div className='resume'>
    <div className='resume-links end-to-end'>
      {' '}
      <div className='sub-head left-end'>Anish Chand</div>
      <div className='location right-end'>
        {' '}
        <span className='logoImage'>
          <a
            href='https://github.com/anishchand99'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='logo' className='logoImage' src={github} />
          </a>
        </span>
        <span className='logoImage'>
          <a
            href='https://www.linkedin.com/in/anish-chand/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='logo' className='logoImage' src={linkedin} />
          </a>
        </span>
      </div>
    </div>
    <div className='highlight'>ABOUT</div>
    <div className='description'>
      {' '}
      Computer Science Undergraduate at the University of New Orleans. Full
      Stack Developer with experience in object-oriented programming and
      problem-solving. Seeking a full-time role for growth and industry
      experience.
    </div>
    {/* education */}
    <div className='highlight'>EDUCATION</div>
    <div className='end-to-end'>
      {' '}
      <div className='sub-head left-end'>University of New Orleans</div>
      <div className='location right-end'> New Orleans, LA</div>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>
        Bachelor of Science, Computer Science
      </div>
      <div className='date'> Aug 2016 - May 2020</div>
    </div>
    <div className='sub-head right-end'> GPA: 3.945/4.0</div>
    {/* experience */}
    <div className='highlight'>EXPERIENCE</div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Undergraduate Research Assistant</div>
      <div className='date right-end'> Jan 2018-Present</div>
    </div>
    <div className='end-to-end'>
      <div className='left-end'>University of New Orleans</div>
      <div className='location right-end'>New Orleans, LA</div>
    </div>
    <div className='description'>
      {' '}
      <ul>
        <li>
          {' '}
          Research on profiling and evading web scanning engines using browser
          fingerprinting. Research paper submitted for IEEE Symposium on
          Security and Privacy 2021 for review.{' '}
        </li>
        <li>
          Built benign clones of financial websites to fingerprint the web
          scanning engines.
        </li>
        <li>
          Implemented Google reCaptcha v3 to analyze the scores of web scanning
          engines.
        </li>
        <li>
          Analyzed security bot traffic based on the data obtained from a
          website deployed on the server.
        </li>
        <li>
          Website captured data from the visitor’s HTTP headers, IP, mouse and
          keyboard for fingerprinting.
        </li>
        <li>
          Website frontend built in ReactJs and backend web server implemented
          in Node.js with PostgreSQL as the database.
        </li>
      </ul>
    </div>
  </div>,

  // right side

  <div className='resume rightSide'>
    {/* experience */}
    <div className='end-to-end'>
      <div className='sub-head left-end'>Programming Mentor</div>
      <div className='date right-end'> Mar 2018-Present</div>
    </div>
    <div className='end-to-end'>
      <div className='left-end'>University of New Orleans</div>
      <div className='location right-end'>New Orleans, LA</div>
    </div>
    <div className='description'>
      {' '}
      <ul>
        <li> Mentored students one-to-one on programming in Java. </li>
        <li>
          Helped freshmen develop their problem-solving ability as a Java lab
          mentor.
        </li>
      </ul>
    </div>
    {/* programming mentor */}
    <div className='end-to-end'>
      <div className='sub-head left-end'>Peer Mentor</div>
      <div className='date right-end'> Aug 2018-Dec 2018</div>
    </div>
    <div className='end-to-end'>
      <div className='left-end'>University of New Orleans</div>
      <div className='location right-end'>New Orleans, LA</div>
    </div>
    <div className='description'>
      {' '}
      <ul>
        <li>
          {' '}
          Mentored the ‘University Success’ class and presented on topics of
          ‘Time Management’ and ‘NoteTaking and Reading.{' '}
        </li>
        <li>Helped freshmen smoothly transition to the college life.</li>
      </ul>
    </div>
    {/* projects */}
    <div className='highlight'>PROJECTS</div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Facial Recognition App</div>
      <div className='date right-end'>
        {' '}
        <a
          href={'https://face-detect-fend.herokuapp.com/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Site
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>A full stack web app that detects faces in the uploaded images.</li>
        <li>
          Built using React, Express, Node.js, PostgreSQL and Clarifai API.
        </li>
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>JobTrack App</div>
      <div className='date right-end'>
        {' '}
        <a
          href={'https://job-track-app2020.herokuapp.com/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Site
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>
          Developed a Full Stack web app to keep track of job applications
        </li>
        <li>
          Ability to create seperate lists for different types of applications.
        </li>
        <li>
          Ability to visualize the statistics of job applications including
          approved, pending, removed and total applicaitions per day.
        </li>
        <li>Built using React, Node.js, Express and PostgreSQL.</li>
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>PathFinding Visualizer</div>
      <div className='date right-end'>
        {' '}
        <a
          href={'https://anishchand99.github.io/pathfinder/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Site
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>
          A web app that visualizes pathfinding algorithms like A* Search,
          Dijkstra, BFS and DFS.
        </li>
        <li>Built with React using CSS animations.</li>
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>AI Chess Bot</div>
      <div className='date right-end'>
        {' '}
        <a
          href={'https://github.com/anishchand99/chessbot'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Site
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>
          A Java chess bot implementing the minimax algorithm with alpha beta
          pruning.
        </li>
      </ul>
    </div>
    <div className='highlight'>SKILLS</div>
    <div className='sub-head'>
      Java, HTML, CSS, JavaScript, Android, React, Node.js
    </div>
  </div>,
];
