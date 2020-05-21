import React from 'react';
import './PageChanger.css';
const PageChanger = () => {
          let prev = 'prev>';
          let next = '<next';
          return (
                    <div className = 'pageChanger'>
                              <div className = 'prev'>{prev}</div>
                              <div className = 'next'>{next}</div>
                    </div>
          )
}
export default PageChanger;