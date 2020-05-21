import React, { Component } from 'react';
import './Name.css';
class Name extends Component {
  render() {
    const { property } = this.props;
    const divStyle = { animation: 'fadein 5s' };
    return (
      <div className='name'>
        <h1>{property.title}</h1>
        <div className='summary'>
          <div className='description-left' style={divStyle}>
            <ul>
              {property.descriptionLeft.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
              <li>
                <a
                  href={property.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Visit the link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Name;
