import React from 'react'
import './index.css'
import bath from './assets/bath.jpg'
import beach from './assets/beach.jpg'
import bed from './assets/bed.jpg'

function About() {
  return (
    <div className='co'> 
    <div className="grid-container">
  <div className="on">Grid Item 1
    <img src={beach} />
  </div>
  <div className="tw">Grid Item 2
  <img src={bed} /></div>
  
  <div className="thre" style={{gridColumn: "2", gridRow: "1 / 3"}}>Grid Item 3
  <img src={bath} /></div>
</div>
      </div>
  )
}

export default About
