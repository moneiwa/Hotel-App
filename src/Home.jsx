import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsAsync } from './roomSlice'; 
import { Link } from 'react-router-dom';
import './index.css';
import LegalModal from './LegalModal'; 

const Home = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const loading = useSelector((state) => state.rooms.loading);
  const error = useSelector((state) => state.rooms.error); 
  const [roomRatings, setRoomRatings] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [duration, setDuration] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    dispatch(fetchRoomsAsync());
  }, [dispatch]);

  const topDestinations = [
    {
      name: "Table Mountain",
      description: "Iconic mountain with stunning views of Cape Town.",
      image: "https://images.pexels.com/photos/5614626/pexels-photo-5614626.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Kirstenbosch Botanical Gardens",
      description: "A world-renowned garden on the slopes of Table Mountain.",
      image: "https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Boulders Beach",
      description: "Home to a colony of African penguins.",
      image: "https://images.pexels.com/photos/3889695/pexels-photo-3889695.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Cape Point",
      description: "A dramatic cape with breathtaking views and hiking trails.",
      image: "https://images.pexels.com/photos/2397250/pexels-photo-2397250.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Robben Island",
      description: "Famous island where Nelson Mandela was imprisoned.",
      image: "https://images.pexels.com/photos/29376558/pexels-photo-29376558/free-photo-of-scenic-view-of-lake-bled-with-church-and-castle.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "V&A Waterfront",
      description: "A lively harbor with shopping, dining, and entertainment.",
      image: "https://images.pexels.com/photos/3886415/pexels-photo-3886415.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
  ];


  const displayedRooms = rooms.slice(0, 6);

  
  const handleRateRoom = (roomId, rating) => {
    setRoomRatings(prevRatings => ({
      ...prevRatings,
      [roomId]: rating,
    }));
  };


  const handleOpenModal = () => {
   
    if (!selectedRoom || !selectedDate || !duration || !guests) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
     
      <div className="hero-section">
        <div className="overlay">
          <h1>as little as R2000</h1>
          <h2>Beach View Hotel</h2>
          <p>
            Our beachfront hotel offers stunning ocean views, direct beach access, and a relaxing atmosphere. Perfect for a peaceful seaside escape.
            Overlooking Table Mountain and Robben Island, Lagoon Beach Hotel offers direct beach access in Cape Town’s Milnerton suburb.
          </p>
      
          <Link to="/about">
            <button className="start-tour-btn">Learn More</button>
          </Link>
        </div>
      </div>

     
      <div className="booking-form">
        <form>
          <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="">Select Room</option>
            {displayedRooms.map((room) => (
              <option key={room.id} value={room.roomName}>
                {room.roomName}
              </option>
            ))}
          </select>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} placeholder="Date" />
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="">Duration</option>
            <option value="1">1 night</option>
            <option value="2">2 nights</option>
          </select>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option value="">Guests</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
          </select>
          <button type="button" onClick={handleOpenModal}>Book Now</button> 
        </form>
      </div>

    
      <div className="popular-packages">
        <h2>Popular Packages</h2>
        {loading ? (
          <div className="loading">Loading rooms...</div>
        ) : error ? (
          <p>Error loading rooms: {error}</p>
        ) : (
          <div className="package-grid">
            {displayedRooms.map((room) => (
              <div className="package" key={room.id}>
                <img
                  src={room.imageURL} 
                  alt={room.roomName}
                  className="room-image"
                />
                <h3>{room.roomName}</h3>
                <p>2 Days / 1 Night Start From ${room.price}</p>
                <button onClick={handleOpenModal}>Book Now</button>
               
                <div className="rating">
                  <span>Rate this room:</span>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <a
                      key={rating}
                      onClick={() => handleRateRoom(room.id, rating)}
                      className={roomRatings[room.id] >= rating ? 'rated' : ''}
                    >
                      ★
                    </a>
                  ))}
                  <p>Current Rating: {roomRatings[room.id] || 'No rating yet'}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

  
      <div className="offer-banner">
        <h2>Get 10% Off On Your Next Travel</h2>
        <p>
          Travel between 22nd August to 23rd November and get exciting offers
          along with a sure 10% cash discount.
        </p>
        <button>Buy Now</button>
      </div>

     
      <div className="top-destinations">
        <h2>Top Destinations Near Cape Town</h2>
        <div className="destination-grid">
          {topDestinations.map((destination, index) => (
            <div className="destination" key={index}>
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </div>








 
   <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19803.845459929197!2d18.418519027230137!3d-33.92486852908455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6b4f6e92d8db%3A0x39927814fe3cbaf0!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1612345678901"
          width="1850"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
   


    
      <LegalModal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </div>
  );
};

export default Home;
