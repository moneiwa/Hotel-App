import React, { useEffect, useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import bath from './assets/bath.jpg';
import beach from './assets/beach.jpg';
import bed from './assets/bed.jpg';
// import DatePicker from 'react-datepicker';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const rooms = useSelector((state) => state.home?.rooms || []);
  const fetchRooms = async () => {
    try {
      const response = await axios.get('/api/rooms'); 
      dispatch(setRooms(response.data));
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [dispatch]);

  return (
    <div className='container'>
      <Link to="/login"> <button className='logout'>Logout</button></Link>
      <div className='image'></div>
      <div className='conta'>
      
          
      </div>
      <div className='im'>
        <img src={bed} alt="Image 1" className="scroll-image" />
        <img src={beach} alt="Image 2" className="scroll-image" />
        <img src={bath} alt="Image 3" className="scroll-image" />
      </div>
      <div className='map_container'>
        <div className='map'></div>
        <div className='text'>
          <h2>Best Luxurious Hotel in Cape Town</h2>
          <p>
            Our beachfront hotel offers stunning ocean views, direct beach access, and a relaxing atmosphere. Perfect for a peaceful seaside escape.
            Overlooking Table Mountain and Robben Island, Lagoon Beach Hotel offers direct beach access in Cape Town’s Milnerton suburb. It offers a beach-side and roof-deck pool and a scheduled complimentary shuttle service to the V&A Waterfront and Century City. Free WiFi is available throughout the property.
            Guests can relax by the outdoor pool, use the 24-hour fitness room or enjoy a range of relaxation treatments at the hotel's Camelot Spa, including massages, facials and body wraps.
            Our beachfront hotel offers stunning ocean views, direct beach access, and a relaxing atmosphere. Perfect for a peaceful seaside escape.
            Overlooking Table Mountain and Robben Island, Lagoon Beach Hotel offers direct beach access in Cape Town’s Milnerton suburb. It offers a beach-side and roof-deck pool and a scheduled complimentary shuttle service to the V&A Waterfront and Century City. Free WiFi is available throughout the property.
            Guests can relax by the outdoor pool, use the 24-hour fitness room or enjoy a range of relaxation treatments at the hotel's Camelot Spa, including massages, facials and body wraps.
           
           </p>
          <Link to="/about">
            <button>Learn More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
