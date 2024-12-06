// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRoomsAsync, addRoomAsync, editRoomAsync, deleteRoomAsync, clearError } from './roomSlice'; 
// import './index.css';

// function Admin() {
//     const [roomName, setRoomName] = useState('');
//     const [guests, setGuests] = useState('');
//     const [price, setPrice] = useState('');
//     const [date, setDate] = useState('');
//     const [image, setImage] = useState(null);
//     const [editingRoomId, setEditingRoomId] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchbyguests, setSearchbyguests] = useState('');
//     const [searchbydate, setSearchbydate] = useState('');
//     const [searchbyprice, setSearchbyprice] = useState('');

//     const dispatch = useDispatch();
//     const rooms = useSelector((state) => state.rooms.rooms);
//     const loading = useSelector((state) => state.rooms.loading);
//     const error = useSelector((state) => state.rooms.error);

//     useEffect(() => {
//         dispatch(fetchRoomsAsync());
//     }, [dispatch]);

//     const filteredRooms = rooms.filter(room => {
//         const matchesRoomName = room.roomName.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesGuests = room.guests.toString().includes(searchbyguests);
//         const matchesDate = room.date.includes(searchbydate);
//         const matchesPrice = room.price.toString().includes(searchbyprice);
        
//         return matchesRoomName && matchesGuests && matchesDate && matchesPrice;
//     });

//     const handleAddOrEditRoom = async () => {
//         const roomDetails = {
//             roomName,
//             guests: Number(guests), 
//             price: Number(price), 
//             date,
//             image
//         };

//         if (editingRoomId) {
//             await dispatch(editRoomAsync({ id: editingRoomId, ...roomDetails }));
//             setEditingRoomId(null);
//         } else {
//             await dispatch(addRoomAsync(roomDetails));
//         }

      
//         setRoomName('');
//         setGuests('');
//         setPrice('');
//         setDate('');
//         setImage(null); 
//     };

//     const handleEditRoom = (room) => {
//         setRoomName(room.roomName);
//         setGuests(room.guests);
//         setPrice(room.price);
//         setDate(room.date);
//         setImage(null); 
//         setEditingRoomId(room.id);
//     };

//     const handleDeleteRoom = (id) => {
//         dispatch(deleteRoomAsync(id));
//     };

//     const isAvailable = roomName && guests && price && date && (image || editingRoomId);

//     const clearFilters = () => {
//         setSearchTerm('');
//         setSearchbyguests('');
//         setSearchbydate('');
//         setSearchbyprice('');
//     };

//     const handleClearError = () => {
//         dispatch(clearError());
//     };

//     return (
//         <>
//             {error && (
//                 <div className="error-message">
//                     <p>{error}</p>
//                     <button onClick={handleClearError}>Clear Error</button>
//                 </div>
//             )}
//             <div className='roomss'>
//                 <ul>
//                     <li>
//                         <input
//                             type="text"
//                             placeholder="Room Name"
//                             className="room-name-input"
//                             value={roomName}
//                             onChange={(e) => setRoomName(e.target.value)}
//                         /> 
//                         <input
//                             type="number"
//                             placeholder="Number of Guests"
//                             className="guests-input"
//                             value={guests}
//                             onChange={(e) => setGuests(e.target.value)}
//                         />
//                         <input
//                             type="number"
//                             placeholder="Price"
//                             className="price-input"
//                             value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                         />
//                         <input
//                             type="date" 
//                             className="date-input" 
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)} 
//                         />
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => setImage(e.target.files[0])}
//                         />
//                         <button
//                             className="add-room-button"
//                             onClick={handleAddOrEditRoom}
//                             disabled={!isAvailable || loading}
//                         >
//                             {loading ? "Processing..." : editingRoomId ? "Edit Room" : "Add Room"}
//                         </button>
//                     </li>
//                 </ul>
//                 <div className="room-list">
//                     {filteredRooms.map(room => (
//                         <div key={room.id} className="room-item">
//                             <h3>{room.roomName}</h3>
//                             <p>Guests: {room.guests}</p>
//                             <p>Price: R{room.price}</p>
//                             <p>Date: {room.date}</p>
//                             <button onClick={() => handleEditRoom(room)}>Edit</button>
//                             <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Admin;
