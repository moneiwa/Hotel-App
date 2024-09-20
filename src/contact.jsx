import React from 'react'
import './App.css'
import DatePicker from 'react-datepicker'

import bath from './assets/bath.jpg'
import beach from './assets/beach.jpg'
import bed from './assets/bed.jpg'


function contact() {
  return (
    // <><DatePicker />
<div class="scroll-container">
  <img src={beach}alt="Cinque Terre" />
  <img src={bath}alt="Cinque Terre" />
  <img src={beach}alt="Cinque Terre" />
  <img src={bed}alt="Cinque Terre" />
</div>
  
  )
}

export default contact