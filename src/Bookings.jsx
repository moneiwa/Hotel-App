import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsAsync, addRoomAsync, clearError } from './roomSlice'; 
import './index.css';
import Paypal from './Paypal';

function Bookings() {
    const [roomName, setRoomName] = useState('');
    const [guests, setGuests] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchbyguests, setSearchbyguests] = useState('');
    const [searchbydate, setSearchbydate] = useState('');
    const [searchbyprice, setSearchbyprice] = useState('');
    const [cart, setCart] = useState([]);

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.rooms);
    const loading = useSelector((state) => state.rooms.loading);
    const error = useSelector((state) => state.rooms.error);

    useEffect(() => {
        dispatch(fetchRoomsAsync());
    }, [dispatch]);

    const filteredRooms = rooms.filter(room => {
        const matchesRoomName = room.roomName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGuests = room.guests.toString().includes(searchbyguests);
        const matchesDate = room.date.includes(searchbydate);
        const matchesPrice = room.price.toString().includes(searchbyprice);
        
        return matchesRoomName && matchesGuests && matchesDate && matchesPrice;
    });

    const handleAddAvailableItem = async () => {
        const roomDetails = {
            roomName,
            guests: Number(guests), 
            price: Number(price), 
            date,
            image
        };

        dispatch(addRoomAsync(roomDetails));
        setRoomName('');
        setGuests('');
        setPrice('');
        setDate('');
        setImage(null); // Reset image input
    };

    const isAvailable = roomName && guests && price && date && image;

    const clearFilters = () => {
        setSearchTerm('');
        setSearchbyguests('');
        setSearchbydate('');
        setSearchbyprice('');
    };

    const handleClearError = () => {
        dispatch(clearError());
    };

    const selectRoom = (room) => {
        setCart((prevCart) => [...prevCart, room]);
    };

    const removeFromCart = (roomId) => {
        setCart((prevCart) => prevCart.filter((room) => room.id !== roomId));
    };

    const totalAmount = cart.reduce((total, room) => total + room.price, 0).toFixed(2);

    return (
        <div className='sear'>
            <input
                type="text"
                placeholder="Search Rooms"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <input
                type="number"
                placeholder="Guests"
                value={searchbyguests}
                onChange={(e) => setSearchbyguests(e.target.value)}
                className="search-input"
            />
            <input
                type="date"
                placeholder="Search Date"
                value={searchbydate}
                onChange={(e) => setSearchbydate(e.target.value)}
                className="search-input"
            />
            <input
                type="number"
                placeholder="Price"
                value={searchbyprice}
                onChange={(e) => setSearchbyprice(e.target.value)}
                className="search-input"
            />
            <button onClick={clearFilters} className="clear-filters-button">Clear</button>

            <h2>Available Rooms:</h2>
            {loading ? (
                <p>Loading rooms...</p>
            ) : (
                <div className="room-cards-container">
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room) => (
                            <div className="room-card" key={room.id}>
                                <img src={room.imageURL} alt={room.roomName} className="room-image" />
                                <div className="room-details">
                                    <h3>{room.roomName}</h3>
                                    <p>Guests: {room.guests}</p>
                                    <p>Price: ${room.price}</p>
                                    <p>Date: {room.date}</p>
                                    <button onClick={() => selectRoom(room)}>Select Room</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No rooms found</p>
                    )}
                </div>
            )}

            <h2>Your Cart:</h2>
            <div className="cart">
                {cart.length > 0 ? (
                    cart.map((room) => (
                            <div className="room-card" key={room.id}>
                        <><img src={room.imageURL} alt={room.roomName} className="room-image" /><div className="cart-item" key={room.id}>
                            <p>{room.roomName}</p>
                            <p>Guests: {room.guests}</p>
                            <p>Price: ${room.price}</p>
                            <button onClick={() => removeFromCart(room.id)}>Remove</button>
                        </div></>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}

                {cart.length > 0 && <Paypal amount={totalAmount} />}
            </div>
        </div>
    );
}

export default Bookings;
