import React, { Component } from 'react';
import './Resume.css';

// pass props from a list.js/ constant.js as page 1 in left side and page 2 as right side
// has the functionality of left on top and right on bottom
class Resume extends Component {
  render() {
    const { display } = this.props;
    return <div>{display}</div>;
  }
}
export default Resume;
