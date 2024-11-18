import { createSlice } from '@reduxjs/toolkit';
import { db, storage } from './config/firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const roomSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        loading: false,
        error: null,
    },
    reducers: {
        setRooms(state, action) {
            state.rooms = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        },
    },
});


export const fetchRoomsAsync = () => async (dispatch) => {
    dispatch(setLoading(true));
    
    try {
        const roomCollection = collection(db, 'rooms');
        const roomSnapshot = await getDocs(roomCollection);
        const roomList = roomSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch(setRooms(roomList));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const addRoomAsync = (roomDetails) => async (dispatch) => {
    dispatch(setLoading(true));
    
    try {
        const { roomName, guests, price, date, image } = roomDetails;


        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);

       
        await addDoc(collection(db, 'rooms'), {
            roomName,
            guests,
            price,
            date,
            imageURL: imageUrl,
        });

        dispatch(fetchRoomsAsync()); 
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const editRoomAsync = (roomDetails) => async (dispatch) => {
    dispatch(setLoading(true));
    
    try {
        const { id, roomName, guests, price, date, image } = roomDetails;

        let imageUrl = null;
        if (image) {

            const storageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(storageRef, image);
            imageUrl = await getDownloadURL(storageRef);
        }

       
        const roomRef = doc(db, 'rooms', id);
        await updateDoc(roomRef, {
            roomName,
            guests,
            price,
            date,
            ...(imageUrl && { imageURL: imageUrl }),
        });

        dispatch(fetchRoomsAsync()); 
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const deleteRoomAsync = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    
    try {
        const roomRef = doc(db, 'rooms', id);
        await deleteDoc(roomRef);
        dispatch(fetchRoomsAsync()); 
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const { setRooms, setLoading, setError, clearError } = roomSlice.actions;

export default roomSlice.reducer;
