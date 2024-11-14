import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const { setRooms } = homeSlice.actions;
export default homeSlice.reducer;
