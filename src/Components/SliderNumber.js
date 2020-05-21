import React, { Component } from 'react';
import './SliderNumber.css';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';

class SliderNumber extends Component {
  render() {
    const { PrevPressed, NextPressed } = this.props;
    return (
      <div className='sliderNumber'>
        <div className='arrow' onClick={() => PrevPressed()}>
          <img src={leftArrow} alt='arrow_left' />
        </div>
        <div className='arrow' onClick={() => NextPressed()}>
          <img src={rightArrow} alt='arrow_right' />
        </div>
      </div>
    );
  }
}
export default SliderNumber;
