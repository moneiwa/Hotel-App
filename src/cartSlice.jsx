// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [] // The list of items in the cart
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     // Action to add a room to the cart
//     addToCart: (state, action) => {
//       state.items.push(action.payload); // Add the room to the cart
//     },
    
//     // Action to remove a room from the cart by its id
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload); // Remove room by id
//     },
    
//     // Action to clear all items from the cart
//     clearCart: (state) => {
//       state.items = []; // Clear all cart items
//     }
//   }
// });

// // Export the action creators
// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// // Export the cart reducer to be included in the store
// export default cartSlice.reducer;
