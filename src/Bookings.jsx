import React, { useState, useEffect } from 'react';
import { addAvailableItem, fetchRooms } from "./db"; // importing your functions
import './index.css';

function Bookings() {
    const [roomName, setRoomName] = useState('');
    const [guests, setGuests] = useState('');
    const [price, setPrice] = useState('');
    const [rooms, setRooms] = useState([]);

    // Fetch rooms on component mount
    useEffect(() => {
        const getData = async () => {
            const data = await fetchRooms();
            setRooms(data);
        };
        getData();
    }, []);

    // Function to handle adding room
    const handleAddAvailableItem = () => {
        const roomDetails = {
            roomName,
            guests,
            price
        };

        addAvailableItem(roomDetails)
            .then(() => {
                alert("Successfully added room");
            })
            .catch((error) => {
                console.error("Error adding room: ", error);
                alert("Error adding room");
            });
    };

    return (
        <div className='roomsl'>
            <ul>
                <li>
                    <input
                        type="text"
                        placeholder="Room Name"
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Number of Guests"
                        onChange={(e) => setGuests(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <button onClick={handleAddAvailableItem}>Add Room</button>
                </li>
            </ul>

            <div>
                <h2>Available Rooms:</h2>
                <ul>
                    {rooms.map((room, index) => (
                        <li key={index}>
                            Room: {room.roomName}, Guests: {room.guests}, Price: ${room.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bookings;
