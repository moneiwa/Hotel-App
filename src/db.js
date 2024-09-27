import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase"; 

import { storage } from './config/firebase'; // Adjust the import path based on your file structure
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const addAvailableItem = async (roomDetails) => {
    try {
        const availableRef = await addDoc(collection(db, "Rooms"), roomDetails);
        return { id: availableRef.id, ...roomDetails }; 
    } catch (error) {
        console.error("Error adding room: ", error);
        throw new Error("Could not add room"); 
    }
};

const fetchRooms = async () => {
    try {
        const colRef = collection(db, "Rooms");
        const querySnapshot = await getDocs(colRef);
        const rooms = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Include the document ID
        return rooms;
    } catch (error) {
        console.error("Error fetching rooms: ", error);
        throw new Error("Could not fetch rooms"); // Throw an error for further handling
    }
};

const uploadImage = async (imageFile) => {
    try {
        const storageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw error; // Rethrow the error to handle it in the Redux slice
    }
};

export { addAvailableItem, fetchRooms, uploadImage }; // Fixed the export statement
