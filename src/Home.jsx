import React, { useEffect, useState } from 'react';
import './index.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import currentDate from './currentDate';
import bath from './assets/bath.jpg'
import beach from './assets/beach.jpg'
import bed from './assets/bed.jpg'
// import {logout} from "./auth";

function Home() {

    return (
   
      
      <div className='containerr'>
        <div className='container'>

          <div className='image'></div>

          <div className='conta'>

            <div className='a'>
              <p>Check-in
                <div className=''><DatePicker /></div>
              </p>

              <p2>Thu 2 Sept</p2>
            </div>

            <div className='b'>
              <p>Check-out
                <currentDate />
                <DatePicker /></p>
              <p2>Thu 3 Sept</p2>
            </div>

            <div className='c'><p>Rooms and guests</p>


              <p2>1 room, 2 Adults, 0 Children</p2>
            </div>
          </div>



          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll-wrapper">
              <img src={bed} alt="Image 1" className="scroll-image" />
              <img src={beach} alt="Image 2" className="scroll-image" />
              <img src={bath} alt="Image 3" className="scroll-image" />
              <img src={bed} alt="Image 1" className="scroll-image" />
              <img src={beach} alt="Image 2" className="scroll-image" />
              <img src={bath} alt="Image 3" className="scroll-image" />
              <img src={beach} alt="Image 2" className="scroll-image" />
              <img src={bath} alt="Image 3" className="scroll-image" />

            </div>
          </div>




          <div className='map_container'>
            <div className='map'></div>

            <div className='text'>

              <h2>Best Luxurious Hotel
                in CapeTown</h2>
              <p>Our beachfront hotel offers stunning ocean views,
                direct beach access, and relaxing atmosphere.
                Perfect for a peaceful seaside escape </p>

              <button>Learn More...</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home