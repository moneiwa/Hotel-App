// src/HomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  rooms: [],
  loading: false,
  isModalOpen: false,
  selectedRoom: '',
  error: null, // Optional: for handling errors
};

// Async action to fetch rooms
export const fetchRoomsAsync = createAsyncThunk('home/fetchRooms', async () => {
  const response = await fetch('/api/rooms'); // Your API endpoint for fetching rooms
  if (!response.ok) {
    throw new Error('Failed to fetch rooms');
  }
  const data = await response.json();
  return data.rooms; // Assuming `rooms` is the key in your API response
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoomsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRoomsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});


export const { openModal, closeModal, setSelectedRoom } = homeSlice.actions;


export default homeSlice.reducer;
