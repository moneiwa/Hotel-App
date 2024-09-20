import React, { useState, useEffect } from 'react';
import { addAvailableItem, fetchRooms } from "./db"; // Importing your functions
import './index.css';

function Bookings() {
    const [roomName, setRoomName] = useState('');
    const [guests, setGuests] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchbyguests, setSearchbyguests] = useState('');
    const [searchbydate, setSearchbydate] = useState('');
    const [searchbyprice, setSearchbyprice] = useState('');

    useEffect(() => {
        const getData = async () => {
            const data = await fetchRooms();
            setRooms(data);
        };
        getData();
    }, []);

    useEffect(() => {
        const filtered = rooms.filter(room => {
            const matchesRoomName = room.roomName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGuests = room.guests.toString().includes(searchbyguests);
            const matchesDate = room.date.includes(searchbydate);
            const matchesPrice = room.price.toString().includes(searchbyprice);
            
            return matchesRoomName && matchesGuests && matchesDate && matchesPrice;
        });

        setFilteredRooms(filtered);
    }, [rooms, searchTerm, searchbyguests, searchbydate, searchbyprice]);

    const handleAddAvailableItem = async () => {
        const roomDetails = {
            roomName,
            guests: Number(guests), 
            price: Number(price), 
            date
        };

        try {
            await addAvailableItem(roomDetails);
            alert("Successfully added room");
            
            setRoomName('');
            setGuests('');
            setPrice('');
            setDate('');
           
            const updatedRooms = await fetchRooms();
            setRooms(updatedRooms);
        } catch (error) {
            console.error("Error adding room: ", error);
            alert("Error adding room");
        }
    };

    const isAvailable = roomName && guests && price && date;

    return (
        <>
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
                        <button
                            className="add-room-button"
                            onClick={handleAddAvailableItem}
                            disabled={!isAvailable}
                        >
                            Add Room
                        </button>
                    </li>
                </ul>
            </div>

            <div>
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

                <h2>Available Rooms:</h2>
                <ul>
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room, index) => (
                            <li key={index}>
                                Room: {room.roomName}, Guests: {room.guests}, Price: ${room.price}, Date: {room.date}
                            </li>
                        ))
                    ) : (
                        <li>No rooms found</li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Bookings;
