import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import roomReducer from './roomSlice'; // Import roomReducer
import hotelReducer from './hotelSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomReducer, 
        hotel: hotelReducer,
    },
});

export default store;
