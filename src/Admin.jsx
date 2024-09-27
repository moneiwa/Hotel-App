import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsAsync, addRoomAsync, clearError } from './roomSlice'; 
import './index.css';

function Admin() {
    const [roomName, setRoomName] = useState('');
    const [guests, setGuests] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchbyguests, setSearchbyguests] = useState('');
    const [searchbydate, setSearchbydate] = useState('');
    const [searchbyprice, setSearchbyprice] = useState('');

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
        // Reset fields
        setRoomName('');
        setGuests('');
        setPrice('');
        setDate('');
        setImage(null); 
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

    return (
        <>
            {error && (
                <div className="error-message">
                    <p>{error}</p>
                    <button onClick={handleClearError}>Clear Error</button>
                </div>
            )}
            <div className='roomss'>
                <ul>
                    <li>
                        <input
                            type="text"
                            placeholder="Room Name"
                            className="room-name-input"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        /> 
                        <input
                            type="number"
                            placeholder="Number of Guests"
                            className="guests-input"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            className="price-input"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input
                            type="date" 
                            className="date-input" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)} 
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button
                            className="add-room-button"
                            onClick={handleAddAvailableItem}
                            disabled={!isAvailable || loading}
                        >
                            {loading ? "Adding..." : "Add Room"}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Admin;
