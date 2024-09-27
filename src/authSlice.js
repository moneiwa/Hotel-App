import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
    },
    reducers: {
        setUser(state, action) {
            // Store only relevant fields
            const { uid, email } = action.payload;
            state.user = { uid, email }; // Adjust based on what you need
            state.error = null; // Clear error on successful login
        },
        setError(state, action) {
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.error = null; // Clear error on logout
        },
    },
});

export const { setUser, setError, logout } = authSlice.actions;

export default authSlice.reducer;
