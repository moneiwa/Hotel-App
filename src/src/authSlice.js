import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
    },
    reducers: {
        setUser(state, action) {
            
            const { uid, email } = action.payload;
            state.user = { uid, email }; 
            state.error = null; 
        },
        setError(state, action) {
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.error = null; 
        },
    },
});

export const { setUser, setError, logout } = authSlice.actions;

export default authSlice.reducer;
