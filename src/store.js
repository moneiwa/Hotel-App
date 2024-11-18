import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import roomReducer from './roomSlice'; // Import roomReducer
import hotelReducer from './hotelSlice';
import homeReducer from './HomeSlice';
import cartReducer from './cartSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomReducer, 
        hotel: hotelReducer,
        home: homeReducer,
        cart: cartReducer 
    },
});

export default store;
