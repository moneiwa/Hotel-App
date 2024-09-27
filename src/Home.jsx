import React, { useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setRooms } from './HomeSlice'; 
import axios from 'axios';
import bath from './assets/bath.jpg'
import beach from './assets/beach.jpg'
import bed from './assets/bed.jpg'
// import DatePicker from 'react-datepicker'



function Home() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.home?.rooms || []); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rooms');
        dispatch(setRooms(response.data));
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, [dispatch]);

  return (
    <div className=''>
      <div className='container'>
        <div className='image'></div>

        <div className='conta'>
          {rooms.length === 0 ? (
            <p></p>
          ) : (
            rooms.map((room) => (
              <div key={room.id}>
                <div className='a'>
                  <p>Check-in</p>
                  {/* <p2>{<DatePicker/>}</p2> */}

                  <input
                    type="date"
                    placeholder="Search Date"
                    value={searchbydate}
                    onChange={(e) => setSearchbydate(e.target.value)}
                    className="search-input"
                />



                </div>

                <div className='b'>
                  <p>Check-out</p>
                  <p2>{room.checkOutDate}</p2>
                </div>

                <div className='c'>
                  <p>Rooms and guests</p>
                  <p2>{room.details}</p2>
                </div>
              </div>
            ))
          )}
        </div>

        <img src={bed} alt="Image 1" className="scroll-image" />
              <img src={beach} alt="Image 2" className="scroll-image" />
              <img src={bath} alt="Image 3" className="scroll-image" />
              
              
        <div className='map_container'>
          <div className='map'></div>

          <div className='text'>
            <h2>Best Luxurious Hotel in Cape Town</h2>
            <p>
              Our beachfront hotel offers stunning ocean views, direct beach access, and a relaxing atmosphere. Perfect for a peaceful seaside escape.
            </p>

            <button>Learn More...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
